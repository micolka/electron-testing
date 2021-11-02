import { channels } from '../types';
import './index.css';

const { ipcRendererSend } = window.mainWinContext

document.getElementById('btn-send').addEventListener('click', () => {
  ipcRendererSend(channels.OPEN_ADDITIONAL_WINDOW)
})

document.getElementById('input').addEventListener('input', (e) => {
  ipcRendererSend(channels.TRANSFER_INPUT_DATA, (<HTMLInputElement>e.target).value)
})

const navSection = document.getElementById('nav-section')
const aside = document.getElementById('aside')

const showAside = () => {aside.classList.add('active')}
const hideAside = () => {aside.classList.remove('active')}
 
navSection.addEventListener('mouseenter', showAside)
aside.addEventListener('mouseenter', showAside)

navSection.addEventListener('mouseleave', hideAside)
aside.addEventListener('mouseleave', hideAside)
