
<template>
	<section class="zk-head">
		<!-- <div class="placeholder"></div>
		<header>
			<section class="Title">
				<h1>{{title}}</h1>
			</section>
			<section v-if="typeof goBack=='object'">
				<div class="goBackClass" @click="goBack.event">
					<div class="svg-wrap-sm">
						<svg>
							<use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#goback"></use>
						</svg>
					</div>
					<h3>{{goBack.txt?goBack.txt:goBack}}</h3>
				</div>
			</section>
			<section v-else>
				<div class="goBackClass" @click="goBackThing">
					<div class="svg-wrap-sm">
						<m-icon name="zk-back"  ></m-icon>
					</div>
					<h3>{{goBack}}</h3>
				</div>
			</section>
		</header> -->

		<div class="zk-head-fixed">
			<x-header :left-options="{backText: this.goBack }">{{this.title}}</x-header>
		</div>
		<div class="zk-head-fixed-pla"></div>

	</section>
</template>
<script>
import { XHeader, TransferDom } from 'zkui'
export default {
	data () {
		return {

		}
	},
	components: {
		XHeader

	},
	directives: {
		TransferDom
	},
	props: ['title', 'goBack']

}
</script>

<style>
.zk-head-fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 9950;
}
.zk-head-fixed-pla {
  height: 46px;
}
</style>