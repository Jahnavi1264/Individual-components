// component inside another component
function Button(props) {
    console.log(props.children);
    return (
      <div className="ui cards">
        <div className="card">
          <div className="content">
            {props.children}
            <div className="extra content">
              <div classNames="ui two buttons">
                <div className="ui basic green button" style={{width:"48%"}}>Accept</div>
                <div className="ui basic red button" style={{width:"48%"}}>Decline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
export default Button;