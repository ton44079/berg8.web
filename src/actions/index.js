import {
    SetListSelectRecordWaitingPage,
    OnFilterWaitingPage,
    OnCriteriaChangeWaitingPage,
    OnClickButtonWaitingPage,
    OnAfterActionResponseWaitingPage,
    GetDocumentWaitingPage,
    GetActionButtonWaitingPage,
    GetTaskWaitingPage
} from './WaitingPageAction';

import {changeStepRequestPage} from './requestPageAction'

import { SetFlagLoading } from './GlobalAction ';

export {
    // Waiting Page
    SetListSelectRecordWaitingPage,
    OnFilterWaitingPage,
    OnCriteriaChangeWaitingPage,
    OnClickButtonWaitingPage,
    OnAfterActionResponseWaitingPage,
    GetActionButtonWaitingPage,
    GetTaskWaitingPage,
    GetDocumentWaitingPage,
    // Global Action
    SetFlagLoading,
    // Request Page
    changeStepRequestPage
}
