import * as componentsNames from './constants/ComponentsNames.scs';
import * as windowsStatuses from './constants/WindowsStatuses.scs';

import * as AppWindowsActions from './actions/AppWindowsActions';

import appReducer from './reducers/appWindows'; //@todo /4/потенциальные баги/ А что если сделаю ещё редьюсеры здесь? По идее, нужно Index подцеплять

import * as Components from './components/index';

module.exports = { componentsNames, windowsStatuses, Components, AppWindowsActions, appReducer };
