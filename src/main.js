import './styles/main.css';
import { DraftGameApplication } from './components/DraftGameApplication.js';

const mountNode = document.querySelector('#app');
const application = new DraftGameApplication(mountNode);

application.initializeApplication();
