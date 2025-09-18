import './App.css'

function Box(props) {
  return <div className="box">{props.label}</div>;
}

function InnerBox(props) {
  return <div className="inner-box">{props.title}</div>;
}

function PeachGroup() {
  return (
    <div className="peach-group">
      <InnerBox title="JM" />
      <InnerBox title="Garcia" />
    </div>
  );
}

function Header() {
  return (
    <div className="header">
      <Box />
      <PeachGroup />
      <Box />
    </div>
  );
}

function LeftPane(props) {
  return <div className="left-pane">{props.label}</div>;
}

function RightItem(props) {
  return <div className="right-item">{props.label}</div>;
}

function RightPane() {
  return (
    <div className="right-pane">
      <RightItem />
      <RightItem />
    </div>
  );
}

function Middle() {
  return (
    <div className="middle">
      <LeftPane />
      <RightPane />
    </div>
  );
}

function Side(props) {
  return <div className="side">{props.label}</div>;
}

function CenterItem(props) {
  return <div className="center-item">{props.label}</div>;
}

function CenterGroup() {
  return (
    <div className="center-group">
      <CenterItem label="C-PCIT9" />
      <CenterItem label="IT3B" />
    </div>
  );
}

function Footer() {
  return (
    <div className="footer">
      <Side />
      <CenterGroup />
      <Side />
    </div>
  );
}

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Middle />
      <Footer />
    </div>
  );
}

export default App;
