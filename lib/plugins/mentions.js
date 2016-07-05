'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function mention(linkify) {
  var TT = linkify.scanner.TOKENS,
  // Text tokens
    MT = linkify.parser.TOKENS,
  // Multi tokens
    MultiToken = MT.Base,
    S_START = linkify.parser.start,
    S_AT = undefined,
    S_MENTION = undefined;

  var MENTION = (function (_MultiToken) {
    _inherits(MENTION, _MultiToken);

    function MENTION(value) {
      _classCallCheck(this, MENTION);

      _MultiToken.call(this, value);
      this.type = 'mention';
      this.isLink = true;
    }

    return MENTION;
  })(MultiToken);

  S_AT = new linkify.parser.State();
  S_MENTION = new linkify.parser.State(MENTION);

  S_START.on(TT.AT, S_AT);
  S_AT.on(TT.DOMAIN, S_MENTION);
  S_AT.on(TT.TLD, S_MENTION);
}

module.exports = mention;