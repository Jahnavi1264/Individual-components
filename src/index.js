import React from "react";
import ReactDom from "react-dom";
import CommentBox from "./CommentBox";
import Button from "./Button";

const App = () =>
{
   return( 
     <>
     <Button >
           <CommentBox name="SVECW" yoe={2002} desc="Dream Aspire Believe Contribute" />
     </Button>
     </>
   );
};

ReactDom.render(
  <App />,
  document.getElementById("root")
);