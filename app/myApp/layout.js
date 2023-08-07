import Header from "../../components/header";
import Footer from "../../components/footer";

const LayoutMain = ({children}) => (
		<div className="flex flex-col items-center">
			<Header/>
			{children}
			<Footer />
		</div>
)
export default LayoutMain;