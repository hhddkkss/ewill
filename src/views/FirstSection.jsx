import DefaultButton from "../components/Button";
import Title from "../components/Title/Title";
import "../scss/firstSection.css";

const FirstSection = () => {
  return (
    <div className="FirstSecContainer">
      <div className="backgroundWave" />
      <div className="titleContainer">
        <h3 className="firstLine">There is no one</h3>
        <h4 className="secondLine">Who loves Pain</h4>
      </div>

      <DefaultButton
        href="#form"
        text={"FORM"}
        style={{ boxShadow: "0px 0px 20px rgba(250, 163, 163, 0.91)" }}
        className={"buttonAnimation"}
      />
      <div className="content">
        <img src="sup.svg" className="sup" />
        <img src="oars.png" className="oars" />
        <img src="bubble.svg" alt="bubble1" className="bubble1" />
        <img src="bubble.svg" alt="bubble2" className="bubble2" />
        <div className="paragraphWrap">
          <Title text={"paragraph"} style={{ alignSelf: "center" }} />
          <ol className="firstParagraph">
            <li className="paragraphSingleContent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </li>
          </ol>
        </div>
        <div className="paragraphWrap">
          <Title text={"paragraph"} style={{ alignSelf: "center" }} />
          <ol className="secondParagraph">
            <li className="paragraphContent">
              Quisque sodales leo
              <span className="emphasize"> vitae vulputate auctor.</span>
            </li>
            <li className="paragraphContent">
              Proin ac justo ut nisl tincidunt imperdiet.Maecenas viverra libero
              a pellentesque blandit.
            </li>
            <li className="paragraphContent">
              Cras tristique tellus id leo bibendum, eu dapibus nisl accumsan.
            </li>
            <li className="paragraphContent">
              Donec ultrices sapien
              <span className="emphasize2">
                {` vitae leo venenatis ullamcorper.`}
              </span>
            </li>
          </ol>
        </div>
        <img src="anotherSup.svg" alt="anotherSup" className="anotherSup" />
        <img src="fireWorks.svg" alt="fireWorks" className="fireWorks" />
      </div>
    </div>
  );
};

export default FirstSection;
