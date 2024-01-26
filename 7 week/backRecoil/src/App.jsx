import './App.css';
import { useRecoilValue, RecoilRoot, useRecoilState } from "recoil";
import { notifications, totalNotificationSelector } from './atoms';

function App() {
  return (
    <RecoilRoot>
      <Buttons/>
    </RecoilRoot>
  )
}

function Buttons() {
  const [networkCount, setNetworkCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);

  return <div>
    <button>My Network ({networkCount.network})</button>
    <button>Jobs ({networkCount.jobs})</button>
    <button>Messaging ({networkCount.messaging})</button>
    <button>Notifications ({networkCount.notifications})</button>
    <button>Me ({totalNotificationCount})</button>
  </div>
}

export default App
