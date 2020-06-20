export const POST = 'post';
export const GET = 'get';
export const END_POINT = 'https://wxapp.sinovacbio.cn/s';
// export const END_POINT = 'http://wxapp.sinovacbio.cn/s';
export const APIS ={
  login: ['/login/login', GET],

  //报表
  getSummaryInfo:["/report/summaryInfo",GET],
  getTimesInfo:["/report/timesInfo",POST],
  getFeedbackList:["/report/feedbackPageList",POST]

};
