import Email from "../email";
import "./page-content.css";

function PageContent() {
  return (
    <div className="pageContentWrapper">
        <div className="comingSoon">
          <p className="text textComingSoon">Coming soon</p>
          <h2 className="text">20 - 21 - 22</h2>
          <h2 className="text">Maggio 2022</h2>
        </div>
        <Email />
    </div>
  );
}

export default PageContent;
