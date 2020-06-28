export const POST = 'post';
export const GET = 'get';
// export const END_POINT = 'https://wxapp.sinovacbio.cn/s';
export const END_POINT = 'http://192.168.199.144:80/wxapp';
// export const END_POINT = 'http://wxapp.sinovacbio.cn/s';
// export const END_POINT = 'http://localhost:8080';
export const APIS ={
  login: ['/login/login', GET],

  //报表
  getSummaryInfo:["/report/summaryInfo",GET],
  getTimesInfo:["/report/timesInfo",POST],
  getFeedbackList:["/report/feedbackPageList",POST],

  //接种地点查询
  //getInjectLocation:["/report/timesInfo",POST],

  platUserPageList:["/platUser/platUserPageList",POST],
  savePlatUser:["/platUser/savePlatUser",POST],
  deletePlatUser:["/platUser/deletePlatUser",POST],

};
