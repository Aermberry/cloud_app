import {
    watch,
    writeFile as _writeFile,
    unlink,
    readFileSync
} from 'fs'
import {
    dirname,
    join
} from 'path'

/**
 * 文件监听函数
 * @param {(String|String[])} files
 * @param {Function} callback
 */
function watchFile (files, callback) {
    [].concat(files).forEach((file) => {
        let timer
        watch(file, () => {
            if (timer) clearTimeout(timer)
            timer = setTimeout(() => callback(file), 50)
        })
    })
}

/**
 * 文件写入函数
 * @param {String} file
 * @param {*} data
 */
function writeFile (file, data) {
    return new Promise((resolve, reject) => {
        _writeFile(file, data, (err) => {
            if (err) reject(err)
            resolve()
        })
    })
}

/**
 * 文件移除函数
 * @param {(String|String[])} files
 */
function removeFile (files) {
    return [].concat(files).map(file =>
        new Promise((resolve, reject) => {
            unlink(file, (err) => {
                if (err && err.code !== 'ENOENT') reject(err)
                resolve()
            })
        }))
}

/**
 * 依赖获取函数
 * @param {String} file
 */
function resolveFile (file) {
    const files = [file]
    const fileDir = dirname(require.resolve(file))
    const fileData = readFileSync(file).toString()
    const regexp = /require\(['|"](.*)['|"]\)/g

    while (regexp.exec(fileData) !== null) {
        const modulePath = join(fileDir, RegExp.$1)
        files.push(require.resolve(modulePath))
    }

    return files
}


export default {
    watchFile,
    writeFile,
    removeFile,
    resolveFile
}
