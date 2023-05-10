export const FavoritePostList= (listItems, loginUser)=>{
const favoritePost = []
  for(var i=0;i<listItems.length;i++){
    for(var n=0;n<loginUser.favoritePostID.length;n++){
      if(listItems[i].postID == loginUser.favoritePostID[n]){
      favoritePost.push(listItems[i])
      }
    }
  }
  return favoritePost
}

export const MyDealPostList=(listItems, loginUser)=>{
  const MyDealPost = []
  for(var i=0;i<listItems.length;i++){
    if(listItems[i].userID == loginUser.userID)
    MyDealPost.push(listItems[i])
  }
  return MyDealPost
}

export const MyDealDonePostList=(listItems, loginUser)=>{
  const MyDealPost = [];
  for(var i=0;i<listItems.length;i++){
    if((listItems[i].user.userID == loginUser.userID) && (listItems[i].postDealDone == true)){
    MyDealPost.push(listItems[i])
    }
  }
  return MyDealPost
}

export const MyDealFalsePostList=(listItems, loginUser)=>{
  const MyDealPost = []
  for(var i=0;i<listItems.length;i++){
    if(listItems[i].user.userID == loginUser.userID && listItems[i].postDealDone == false)
    MyDealPost.push(listItems[i])
  }
  return MyDealPost
}