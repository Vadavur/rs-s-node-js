import {parsedUserCommands} from './getUserCommand';

const correctCommand = {
  actionCommand: new RegExp('[(-a)(--action)]'),
  actionName: new RegExp('[(encode)(decode)]'),
  shiftCommand: new RegExp('[(-s)(--shift)]'),
  shiftValue: new RegExp('[(-\\d+)(\\d)]'),
  inputCommand: new RegExp('[(-i)(--input)]'),
  inputValue: new RegExp('[(-a)(--action)]'),
  outputCommand: new RegExp('[(-a)(--action)]'),
  outputValue: new RegExp('[(-a)(--action)]'),
}