export const POST = 'post';
export const GET = 'get';
// export const END_POINT = 'https://wxapp.sinovacbio.cn/s';

// export const END_POINT = 'http://192.168.1.18:8080';
// export const END_POINT = 'http://wxapp.sinovacbio.cn/s';

//文件服务器路径
// export const FILE_SERVER_HOST = 'http://10.11.40.233:8443/'
// export const END_POINT = 'http://localhost:8080';

export const FILE_SERVER_HOST = 'https://wxapp.sinovacbio.cn'
export const END_POINT = 'https://wxapp.sinovacbio.cn/s';

export const APIS ={
  login: ['/login/login', GET],

  changePassword:['/login/changePwd',GET],

  //报表
  getSummaryInfo:["/report/summaryInfo",GET],
  getTimesInfo:["/report/timesInfo",POST],
  getFeedbackList:["/report/feedbackPageList",POST],
  exportFeedback:["/report/exportFeedback",POST],


  //接种地点查询
  //getInjectLocation:["/report/timesInfo",POST],

  platUserPageList:["/platUser/platUserPageList",POST],
  savePlatUser:["/platUser/savePlatUser",POST],
  deletePlatUser:["/platUser/deletePlatUser",GET],

  //反馈证明
  getInjectDataList:["/cert/data/list",POST],
  getInjectCertApplyPageList:["/cert/getPageList",POST],
  saveInjectCertData:['/cert/data/save',POST]

};
