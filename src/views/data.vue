<template>
	<div class="home">
		<bg></bg>
		<div class="head">
			<h1 style="letter-spacing:15px">农产品批发市场大数据可视化展板</h1>
			<div class="weather">
				<span>{{nowTime}}</span>
                <router-link to="/"><a>管理平台</a></router-link>
			</div>
			<div class="mainbox">
				<ul class="clearfix">
					<li>
						<box title="农产品支付宝交易排行">
							<bar ref="e1" class="allnav" :data="provinceList" color="#2f89cf"></bar>
						</box>
						<box title="农产品微信交易排行">
							<bar ref="e2" class="allnav" :data="cityList"  color="#27d08a"></bar>
						</box>
						<box>
							<pie ref="e3" class="sy" :data="ageList" title="周谷堆大兴物流园"></pie>
							<pie ref="e4" class="sy" :data="genderList" title="宿州百物流中心"></pie>
							<pie ref="e5" class="sy" :data="jobList" title="肥西物流园"></pie>
						</box>
					</li>
					<li>
					<div class="bar">
						<div class="barbox">
						<ul class="clearfix">
							<li class="pulll_left counter">{{ganran}}</li>
							<li class="pulll_left counter">{{zhiyu}}</li>
						</ul>
						</div>
						<div class="barbox2">
						<ul class="clearfix">
							<li class="pulll_left">累计交易量(单)</li>
							<li class="pulll_left">累计交易金额(元)</li>
						</ul>
						</div>
					</div>
					<div class="map">
						<div class="map1">
						<img src="picture/lbx.png" />
						</div>
						<div class="map2">
						<img src="picture/jt.png" />
						</div>
						<div class="map3">
						<img src="picture/map.png" />
						</div>
						<china-area ref="map" :data="maplist"></china-area>
					</div>
					</li>
					<li>
						<box title="最新动态">	
							<ul class="dongtailist">
								<li :style="dongtaistyle(item.type)" v-for="item in dongtailist" :key="item.id">
									[
									<span>{{item.type | fmtDongtaiType}}</span>
									]
									{{item.content}}
									{{item.time}}
									</li>
							</ul>
						</box>
						<box title="安徽省新增 银行卡笔数">
							<eline ref="e6" :data="qylist"></eline>
						</box>
						<box title="安徽省新增 交易金额">
							<eline ref="e7" :data="zslist"></eline>
						</box>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
import "@/assets/css/home.css";
import bg from '@/components/BackgroundCanvas'
import '@/assets/js/setFontSize'
import bar from '@/components/echarts/bar'
import pie from '@/components/echarts/pie'
import eline from '@/components/echarts/line'
import box from '@/components/Box'
import chinaArea from "@/components/echarts/area";
export default {
	name: "Home",
	components: {
		bg,
		bar,
		pie,
		eline,
		box,
		chinaArea
	},
	data() {
		return {
			provinceList: [],
			cityList: [],
			ageList: [
				{
					name: "10岁下",
					value:1
				},
				{
					name: "20-29",
					value:1 
				},
				{
					name: "30-39",
					value:2
				},
				{
					name: "40-49",
					value:3
				},
				{
					name: "50-59",
					value:4
				},
				{
					name: "60岁上",
					value:5
				}
			],
			genderList: [
				{
					name: '男',
					value: 1
				},
				{
					name: '女',
					value: 1
				},
			],
			jobList: [
				{
					name: '医生',
					value:'3'
				},
				{
					name: '教师',
					value:'1'
				},
				{
					name: '司机',
					value:'2'
				},
				{
					name: '售货员',
					value:'3'
				},
				{
					name: '退休人员',
					value:'6'
				},
			],
			qylist: {
				title: ["微信", "支付宝"],
				color: ["#66e783", "#1a9bde"],
				date: [],
				data: []
			},
			zslist: {
				title: ["银行卡", "微信"],
				color: ["#00FA9A", "#FF4500"],
				date: [],
				data: []
			},
			maplist:[],
			dongtailist: [
				{
					id: 1,
					content:'安徽省合肥市新增交易订单',
					time:'5分钟前',
					type: 0
				},
				{
					id: 2,
					content:'安徽省合肥市新增交易订单',
					time:'5分钟前',
					type: 1
				},{
					id: 3,
					content:'安徽省合肥市新增交易订单',
					time:'5分钟前',
					type: 2
				},{
					id: 4,
					content:'安徽省合肥市新增交易订单',
					time:'5分钟前',
					type: 3
				},{
					id: 5,
					content:'安徽省合肥市新增交易订单',
					time:'5分钟前',
					type: 2
				},{
					id: 6,
					content:'安徽省合肥市新增交易订单',
					time:'5分钟前',
					type: 3
				},
			],
			cityganranlist:[],
			ganran: 873001,
            zhiyu: 50000000,
            nowTime:'',
            nowDate:''
		}
	},
	filters: {
		fmtDongtaiType(val) {
			return ["增加", "增加", "增加", "增加"][val];
		}	
	},
	created () {
		this.getNCP()
		// this.$axios.get("https://service-n9zsbooc-1252957949.gz.apigw.tencentcs.com/release/qq")

		// 腾讯接口处理
		// this.$axios.get("/api/g2/getOnsInfo?name=disease_h5")
		// .then(res => {
		// 	console.log(JSON.parse(res.data.data))
		// 	//柱状图数据
		// 	let arrProvince = JSON.parse(res.data.data).areaTree[0].children.map(item => {
		// 		return {label:item.name, value:item.today.confirm}
		// 	})
		// 	arrProvince.sort((a,b) => {
		// 		return b.value - a.value;
		// 	})
		// 	this.maplist = JSON.parse(res.data.data).areaTree[0].children.map(item => ({
		// 		name:item.name,
		// 		value:item.total.confirm
		// 	}))
		// 	let arrCity = JSON.parse(res.data.data).areaTree[0].children[0].children.map(item => ({
		// 		label:item.name,
		// 		value:item.total.confirm
		// 	}))
		// 	this.provinceList = arrProvince.slice(0,7)
		// 	this.cityList = arrCity.slice(0,7)

		// 	// 标题数据
		// 	this.ganran = JSON.parse(res.data.data).chinaTotal.confirm
		// 	this.zhiyu = JSON.parse(res.data.data).chinaTotal.heal
				
		// 	//折线图数据
		// 	let date = []
		// 	let confirm = []
		// 	let suspect = []
		// 	let dead = []
		// 	let heal = []
		// 	res.data.data.wuwei_ww_cn_day_counts.map(item => {
		// 		date.push(item.date)
		// 		confirm.push(item.confirm)
		// 		suspect.push(item.suspect)
		// 		dead.push(item.dead)
		// 		heal.push(item.heal)
		// 	})
		// 	this.qylist.date = date.slice(-11)
		// 	this.qylist.data[0] = confirm.slice(-11)
		// 	this.qylist.data[1] = suspect.slice(-11)
		// 	// console.log(this.zslist)
		// 	this.zslist.date = date.slice(-11)
		// 	this.zslist.data[0] = heal.slice(-11)
		// 	this.zslist.data[1] = dead.slice(-11)
		// })

		// 163接口处理
		this.$axios.get("/api/ug/api/wuhan/app/data/list-total")
		.then(res => {
			// console.log(res.data.data)
			//柱状图数据
			this.arrProvince = res.data.data.areaTree[2].children.map(item => ({
				label:item.name,
				value:item.total.confirm
			}))
			this.maplist = res.data.data.areaTree[2].children.map(item => ({
				name:item.name,
				value:item.total.confirm
			}))
			let arrCity = res.data.data.areaTree[2].children[0].children.map(item => ({
				label:item.name,
				value:item.total.confirm
			}))
			// this.provinceList = this.arrProvince.slice(0,7)
			this.provinceList = [
				{
					label: '蔬菜',
					value: 65000
				},
				{
					label: '水果',
					value: 56000
				},
				{
					label: '水产品',
					value: 49000
				},
				{
					label: '畜禽肉类',
					value: 45000
				},
				{
					label: '粮油',
					value: 33000
				},
				{
					label: '土特产',
					value: 28000
				}
			]
			this.cityList = [
				{
					label: '蔬菜',
					value: 55000
				},
				{
					label: '水果',
					value: 53000
				},
				{
					label: '水产品',
					value: 43000
				},
				{
					label: '畜禽肉类',
					value: 38000
				},
				{
					label: '粮油',
					value: 37000
				},
				{
					label: '土特产',
					value: 18000
				}
			]
			// this.cityList = arrCity.slice(0,7)
			// 标题数据
			// this.ganran = res.data.data.areaTree[2].total.confirm
			// this.zhiyu = res.data.data.areaTree[2].total.heal
				
			//折线图数据
			let date = []
			let confirm = []
			let suspect = []
			let dead = []
			let heal = []
			res.data.data.chinaDayList.map(item => {
				date.push(item.date)
				confirm.push(item.today.confirm)
				suspect.push(item.today.suspect)
				dead.push(item.today.dead)
				heal.push(item.today.heal)
			})
			this.qylist.date = date.slice(-11)
			this.qylist.data[0] = confirm.slice(-11)
			this.qylist.data[1] = suspect.slice(-11)
			// console.log(this.zslist)
			this.zslist.date = date.slice(-11)
			this.zslist.data[0] = heal.slice(-11)
			this.zslist.data[1] = dead.slice(-11)
		})
	},
	mounted () {
        this.currentTime();
		// window.onload = window.onresize = ()=> {
		let html = document.querySelector('html')
		html.style.fontSize = window.innerWidth / 20 + 'px'
		Object.keys(this.$refs).forEach(a => {
			this.$refs[a].init()
		});
	},
	methods: {
		//通过
		getNCP() {
			
		},

		dongtaistyle(val) {
			return { color: ["orangered", "green", "yellow", "red"][val] };
        },
        
        currentTime() {
            setInterval(this.getDate, 500);
        },
        getDate() {
            let yy = new Date().getFullYear();
            let mm = new Date().getMonth() + 1;
            let dd = new Date().getDate();
            let week = new Date().getDay();
            let hh = new Date().getHours();
            let mf =
                new Date().getMinutes() < 10
                    ? "0" + new Date().getMinutes()
                    : new Date().getMinutes();
            if (week == 1) {
                this.nowWeek = "星期一";
            } else if (week == 2) {
                this.nowWeek = "星期二";
            } else if (week == 3) {
                this.nowWeek = "星期三";
            } else if (week == 4) {
                this.nowWeek = "星期四";
            } else if (week == 5) {
                this.nowWeek = "星期五";
            } else if (week == 6) {
                this.nowWeek = "星期六";
            } else {
                this.nowWeek = "星期日";
            }
            this.nowTime =yy + "/" + mm + "/" + dd + "/ " + hh + ":" + mf;
            this.nowDate = yy + "/" + mm + "/" + dd;
        },
	},
	// 销毁定时器
	beforeDestroy: function() {
			if (this.getDate) {
					console.log("销毁定时器")
					clearInterval(this.getDate); // 在Vue实例销毁前，清除时间定时器
			}
	}
};
</script>

<style scoped>
/* .home {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  background: #000d4a url(../assets/images/bg.jpg) center top;
  background-size: cover;
  color: #666;
  font-size: 0.1rem;
} */

.dongtailist li,
.dongtailist li span {
  font-size: 14px;
  padding: 5px;
  text-align: left;
}


.dongtailist{
	overflow-y: auto;
	padding: 10px;
	height:90%;
}
.dongtailist::-webkit-scrollbar {/*滚动条整体样式*/
	width: 4px;     /*高宽分别对应横竖滚动条的尺寸*/
	height: 4px;
	scrollbar-arrow-color:red;

}
.dongtailist::-webkit-scrollbar-thumb {/*滚动条里面小方块*/
	border-radius: 5px;
	-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
	background: #fff;
	scrollbar-arrow-color:#fff;
	box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
}
.dongtailist::-webkit-scrollbar-track {/*滚动条里面轨道*/
	-webkit-box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
	border-radius: 0;
	background: rgba(0,0,0,0.2);
	box-shadow: inset 0 0 5px rgba(0,0,0,0.2);
}
</style>