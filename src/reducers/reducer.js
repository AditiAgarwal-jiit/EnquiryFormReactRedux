var initialState = {
  studentArr : []
};

export const Reducer=(state=initialState,action)=>{
  var tempArr = [...state.studentArr];
  switch(action.type){
    case "SUBMIT":
    tempArr.push(action.payload.student);
    return{
      studentArr : tempArr
    }
    break;

    default :
    return state;
  }
}