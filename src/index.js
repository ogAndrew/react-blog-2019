import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard"; 

const App = () => {
  return (
    
    <div className="ui container comments">
    <ApprovalCard>
    <CommentDetail
        author="Sam"
        timeAgo="Today at 4:45PM"
        post="I'm hungry"
        img={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail
        author="Emily"
        timeAgo="Today at 2:45PM"
        post="I could have a drink"
        img={faker.image.avatar()}
      />
    </ApprovalCard>
    <ApprovalCard>
    <CommentDetail
        author="Shaun"
        timeAgo="Yesterday at 7:45PM"
        post="I love Jesus"
        img={faker.image.avatar()}
      />  
    </ApprovalCard>  
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
