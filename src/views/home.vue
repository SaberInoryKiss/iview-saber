<!--
 * @Author: 夏开尧
 * @Description: file content
 * @Date: 2020-07-28 18:04:14
 * @LastEditTime: 2020-08-05 17:11:22
 * @LastEditors: 夏开尧
 * @UpdateLogs: logs
-->
<template>
    <div>
        <Breadcrumb style="margin-bottom:20px">
            <BreadcrumbItem>工作平台</BreadcrumbItem>
            <BreadcrumbItem>首页</BreadcrumbItem>
            <test></test>
        </Breadcrumb>
        <Row type="flex" justify="space-between">
            <Col span="4"> 
                <mycard icon="md-person-add" title="新增用户" bgcolor="#2d8cf0" count="803"></mycard>
            </Col>
            <Col span="4"> 
               <mycard icon="ios-disc" title="累计点击" bgcolor="#19be6b" count="232"></mycard>
            </Col>
            <Col span="4"> 
                <mycard icon="md-help" title="新增问答" bgcolor="#ff9900" count="142"></mycard>
            </Col>
            <Col span="4"> 
                 <mycard icon="md-share" title="分享统计" bgcolor="#ed3f14" count="657"></mycard>
            </Col>
            <Col span="4"> 
               <mycard icon="md-chatbubbles" title="新增互动" bgcolor="#e46cbb" count="12"></mycard>
            </Col>
            <!-- <Col span="3"> 
                <mycard icon="md-add-circle" title="新增页面" bgcolor="#9a66e4" count="14"></mycard>
            </Col> -->
        </Row>
        <Row type="flex" justify="space-between" style="margin-top:20px">
            <Col span="8">
                 <Card :padding="0">
                    <charts-pie id="pie"></charts-pie>
                </Card>
            </Col>
           <Col span="15">
                <Card :padding="0">
                    <charts-column id="column"></charts-column>
                </Card>
            </Col>
        </Row>
        <Row style="margin-top:20px">
           <Col span="24">
                <Card :padding="0">
                    <charts-line id="line"></charts-line>
                </Card>
            </Col>
        </Row>
    </div>
</template>

<script>
import mycard from '@/components/mycard'
import column from '@/components/charts/column'
import line from '@/components/charts/line'
import pie from '@/components/charts/pie'
import test from '@/components/test'
 
export default {
    components: {
        mycard,
        "charts-column":column,
        "charts-line":line,
        "charts-pie":pie,
        test
    },
    data() {
        return {  

        }
    },
    created() {

    },
    mounted() {
    },
    methods: {
    }
}
</script>
<style scoped>

</style>