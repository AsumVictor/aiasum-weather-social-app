import Sidenav from "../components/sidenav"
import MainContent from "../components/main.content"

function PageLayout() {
  return (
    <main className={`main bg-dark-primary`}>
        <Sidenav />
        <MainContent />
    </main>
  )
}

export default PageLayout