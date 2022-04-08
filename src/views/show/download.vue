<!--
 * @Author: 夏开尧
 * @Description: file content
 * @Date: 2021-06-17 14:15:34
 * @LastEditTime: 2021-12-06 15:42:31
 * @LastEditors: 夏开尧
 * @UpdateLogs: logs
-->
<template>
  <div>
    <Breadcrumb style="margin-bottom:20px">
      <BreadcrumbItem>工作平台</BreadcrumbItem>
      <BreadcrumbItem>订单管理</BreadcrumbItem>
      <BreadcrumbItem>下载excel模板</BreadcrumbItem>
    </Breadcrumb>
    <Button type="primary" @click="downloadFile">下载模板文件</Button>
  </div>
</template>

<script>
import RecursionHalle, { treeRecursionHalle } from "tree-structure-handle";
import ExcelJS from "exceljs";
import * as FileSaver from "file-saver";
import axios from 'axios'
// import mockData from '@/mock/index.js'
// import text from '@/assets/text/log.txt'
export default {
  data() {
    return {};
  },
  computed: {},
  created() {},
  methods: {
    downloadFile() {
      const workbook = new ExcelJS.Workbook();
      //这里读取项目中的文件好像必须的曲线救国，利用http请求的方式请求模板Excel返回一个ArrayBuffer
      axios
        .get("./excel/rep-mdl-pub-day-030003.xlsx", { responseType: "arraybuffer" })
        .then((response) => {
          
          workbook.xlsx.load(response.data).then(() => {
            //加载模板
            let sheet1 = workbook.getWorksheet("Sheet1"); //这是不使用返回的WorkBook
            
            let tenant_name = ['呵呵','哈哈']
            // for(let i in tenant_name) {
              
            //   let a = 6+i
            //   let b = "C" +a
            //   sheet1.getCell(b).value = 'aaaaa'; //根据单元格更新值
            // }
            sheet1.getCell("C6").value = 'aaaa'
            console.log(sheet1.getCell("C6").value,'rep-mdl-pub-stockin-040001.xlsx')
            
            workbook.xlsx.writeBuffer().then((data) => {
              //最后把填充好数据的Excel导出
              const blob = new Blob([data], {
                type: "application/octet-stream",
              });
              FileSaver.saveAs(blob, "test.xlsx"); //这里导出的文件名没有自定义
            });
            // let sheet4 = workbook.getWorksheet("sheet4");
            // sheet4.getCell("G4").value = this.dataForm.relation_identity_card;
            // let sheet5 = workbook.getWorksheet("sheet5");
            // sheet5.getCell("B3").value = this.dataForm.tenant_name;
            // let sheet6 = workbook.getWorksheet("picture");
            //这里用了本地图片做demo，也可使用网络图片
            // axios
            //   .get("./distimages/bank_img/050306795095859357755807.jpg", {
            //     responseType: "arraybuffer",
            //   })
            //   .then((res) => {
            //     const imageId = workbook.addImage({
            //       buffer: res.data,
            //       extension: "jpeg", //这里文件类型没有做判断
            //     });
            //     sheet6.addImage(imageId, {
            //       tl: { col: 0, row: 0 },
            //       br: { col: 8, row: 20 },
            //     });
            //     workbook.xlsx.writeBuffer().then((data) => {
            //       //最后把填充好数据的Excel导出
            //       const blob = new Blob([data], {
            //         type: "application/octet-stream",
            //       });
            //       FileSaver.saveAs(blob, "test.xlsx"); //这里导出的文件名没有自定义
            //     });
            //   });
          });
        });
    },
  },
};
</script>
<style>
</style>