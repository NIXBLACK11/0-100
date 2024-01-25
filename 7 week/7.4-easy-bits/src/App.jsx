import './App.css';
import { RecoilRoot, useRecoilValue } from "recoil";
import { networkAtom, jobsAtom, messagingAtom, notificationsAtom, meSelector } from './store/atoms/atoms';

function App() {
  return (
    <RecoilRoot>
      <Buttons/>
    </RecoilRoot>
  )
}

function Buttons() {
  const networkNotificationsCount = useRecoilValue(networkAtom);
  const jobsNotificationsCount = useRecoilValue(jobsAtom);
  const messagingNotificationsCount = useRecoilValue(messagingAtom);
  const notificationsNotificationsCount = useRecoilValue(notificationsAtom);
  const meNotificationsCount = useRecoilValue(meSelector);
  return <div>
    <button>Home</button>
    <button>My Network ({networkNotificationsCount>=100 ? "99+" : networkNotificationsCount})</button>
    <button>Jobs ({jobsNotificationsCount>=100 ? "99+" : jobsNotificationsCount})</button>
    <button>Messaging ({messagingNotificationsCount>=100 ? "99+" : messagingNotificationsCount})</button>
    <button>Notifications ({notificationsNotificationsCount>=100 ? "99+" : notificationsNotificationsCount})</button>
    <button>Me ({meNotificationsCount})</button>
  </div>
}

export default App
