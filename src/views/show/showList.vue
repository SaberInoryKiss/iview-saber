<template>
    <div>
        <Breadcrumb style="margin-bottom:20px">
            <BreadcrumbItem>工作平台</BreadcrumbItem>
            <BreadcrumbItem>订单管理</BreadcrumbItem>
            <BreadcrumbItem>票务列表</BreadcrumbItem>
        </Breadcrumb>
        <Table border ref="selection" :columns="columns4" :data="showData"></Table>
        <Page
            class="flex j-center"
            style="marginTop:20px"
            :total="showList.length"
            show-sizer
            show-elevator
            show-total
            :page-size-opts="[5,10,25,50,100]"
            @on-change="changePage"
            @on-page-size-change="changePageSize"
        />
    </div>
</template>

<script>
// import mockData from '@/mock/index.js'
export default {
	data () {
		return {
			columns4: [
				{
					type: 'selection',
					width: 60,
					align: 'center',
					key: 'id'
				},
				{
					title: '海报',
					key: 'img',
					render:(h, params) => {
						return h('img', {
							attrs: {
								src:params.row.img
							},
							class : {
								showimg:true
							}
						});
					}
				},
				{
					title: '标题',
					key: 'title'
				},
				{
					title: '艺术家',
					key: 'artistname'
				},
				{
					title: '类型',
					key: 'type',
				},
				{
					title: '城市',
					key: 'city',
				},
				{
					title: '地址',
					key: 'address',
				},
				{
					title: '时间',
					key: 'showtime',
				},
				{
					title: '操作',
					key: 'action',
					width: 150,
					align: 'center',
					render: (h, params) => {
						return h('div', [
							h('Button', {
								props: {
									type: 'primary',
									size: 'small'
								},
								style: {
									marginRight:'10px'
								},
								on: {
									click: () => {
										this.show(params.index);
									}
								}
							}, '详情'),
							h('Button', {
								props: {
									type: 'error',
									size: 'small'
								},
								on: {
									click:() => {
										this.$Modal.confirm({
											title: '系统提示',
											content: '删除后无法恢复，确定删除吗？',
											onOk: () => {
												this.remove(params.index);
											}
										});
									}
								}
							}, '删除')
						]);
					}
				}
			],
			showList:[],
			currentPage: 0,
			currentPageSize: 10,
		};
	},
	computed: {
		showData() {
			//再截取数据分页展示
			const startIndex = this.currentPage * this.currentPageSize;
			const endIndex = startIndex + this.currentPageSize;
			return this.showList.slice(startIndex, endIndex);
		},
	},
	created () {
		this.getShowList();
	},
	methods: {
		getShowList() {
			this.$Loading.start();
			this.$axios.get('/showList')
				.then(res => {
					this.$Loading.finish();
					this.showList = res.data.showList;
				});
		},
		//切换页码
		changePage(num) {
			this.currentPage = num -1;
		},
		//切换页数
		changePageSize(num) {
			this.currentPageSize = num;
		},
		show (index) {
			this.$Modal.info({
				title: '票务信息',
				width: 500,
				render: (h) => {
					return h('div', {
						class : 'flex j-ar'
					}, [
						h('img', {
							class:'left-render-img',
							attrs: {
								src: this.showList[index].img,
							},
						}),
						h('div', {
							class : 'right-area',
						}, [
							h('p', `标题:${this.showList[index].title}`),
							h('p', `艺术家：${this.showList[index].artistname}`),
							h('p', `类型：${this.showList[index].type}`),
							h('p', `城市：${this.showList[index].city}`),
							h('p', `地址：${this.showList[index].address}`),
							h('p', `时间：${this.showList[index].showtime}`)
						]
						)
					]);
				},
			});
		},
		remove (index) {
			this.showList.splice(index, 1);
			this.$Message.success('删除成功');
		}
	}
};
</script>
<style>
    .ivu-table-overflowX{ overflow-x: hidden;} 
    .showimg {
        width: 50px;
        height: 70px;
    }
    .left-render-img {
        width: 200px;
        height: 300px;
        -webkit-user-drag: none;
    }
    .right-area {
        flex-direction: column;
    }
    .right-area p {
        margin-top: 25px;
    }
</style>