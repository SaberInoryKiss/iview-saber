<!--
 * @Author: 夏开尧
 * @Description: file content
 * @Date: 2021-06-17 14:15:34
 * @LastEditTime: 2021-08-20 16:18:47
 * @LastEditors: 夏开尧
 * @UpdateLogs: logs
-->
<template>
    <div>
        <Breadcrumb style="margin-bottom:20px">
            <BreadcrumbItem>工作平台</BreadcrumbItem>
            <BreadcrumbItem>订单管理</BreadcrumbItem>
            <BreadcrumbItem>读取本地文件</BreadcrumbItem>
        </Breadcrumb>
				<Button type="primary" @click="readFile">读取文件</Button>
				<Input v-model="logs"  type="textarea" autosize></Input>
    </div>
</template>

<script>
import RecursionHalle,  { treeRecursionHalle } from 'tree-structure-handle';
// import mockData from '@/mock/index.js'
// import text from '@/assets/text/log.txt'
export default {
	data () {
		return {
			testData: [
				{
						title: '0-0',
						key: '0-0',
						children: [
								{
										title: '0-0-0',
										key: '0-0-0',
										children: [
												{ title: '0-0-0-0', key: '0-0-0-0' },
												{ title: '0-0-0-1', key: '0-0-0-1' },
												{ title: '0-0-0-2', key: '0-0-0-2' },
										],
								},
								{
										title: '0-0-1',
										key: '0-0-1',
										children: [
												{ title: '0-0-1-0', key: '0-0-1-0' },
												{ title: '0-0-1-1', key: '0-0-1-1' },
												{ title: '0-0-1-2', key: '0-0-1-2' },
										],
								},
								{
										title: '0-0-2',
										key: '0-0-2',
								},
						],
				},
				{
						title: '0-1',
						key: '0-1',
						children: [
								{ title: '0-1-0', key: '0-1-0' },
								{ title: '0-1-1', key: '0-1-1' },
								{ title: '0-1-2', key: '0-1-2' },
						],
				},
				{
						title: '0-2',
						key: '0-2',
				},
		],
		originArr: [
				{ id: 1, parentId: 0, },
				{ id: 2, parentId: 1 },
				{ id: 6, parentId: 4 },
				{ id: 7, parentId: 0 },
				{ id: 3, parentId: 7 },
		],
		logs:''
		};
	},
	computed: {
	},
	created () {
		// 树结构数据某一个键值
		// console.log(treeRecursionHalle.convertData(this.testData, 'key'))
		//一维数组转化为树结构类型数据
		// console.log(treeRecursionHalle.arrToTreeData(this.originArr, 'key'))
		//树结构类型数据的路径
		// console.log(treeRecursionHalle.nodePath(this.testData, 'key','至'))
		//获取节点的子节点
		// console.log(treeRecursionHalle.getChildNode(this.testData, 'title','0-1'))
		//为节点替换键名
		console.log(treeRecursionHalle.replaceKeyName(this.testData,  { ['key']: 'id', ['title']: 'name' }))

	},
	methods: {
		readFile(){
				// const url = '../../assets/text/log.txt'
				// const text = require('../../assets/text/log.txt')
				// //  更新数据devInfo.txt文件接口      
        // let xhr = new XMLHttpRequest(),
        // okStatus = document.location.protocol === "file:" ? 0 : 200;
        // xhr.open('GET', './log.txt', false);// 文件路径
        // xhr.overrideMimeType("text/html;charset=utf-8");//默认为utf-8
        // xhr.send(null);
        // console.log(xhr.responseText); //打印文件信息
				// this.logs = xhr.responseText

				var xhr = new XMLHttpRequest()
				// xhr.open('GET', './abc_mrch_background.log', true)
				xhr.open('GET', 'data.json', true)
				xhr.responseType = 'blob'
				let that = this
				xhr.onload = function(e) {
					var blob = this.response
					var reader = new FileReader()
					reader.readAsText(blob, 'gb2312')
					reader.onload = () => {
						if(reader.result) {
							that.logs = reader.result
						}
					}
				}
				xhr.send()
		}
	}
};
</script>
<style>
</style>