import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import enApp from './en-US.json';
import esApp from './es-US.json';

function getLocaleFile(locale) {
  switch (locale) {
    case 'en-US':
      {
        return enApp;
      }

    case 'es-US':
      {
        return esApp;
      }

    default:
      {
        return {};
      }
  }
}

export function getFileForTranslations() {
  return _getFileForTranslations.apply(this, arguments);
}

function _getFileForTranslations() {
  _getFileForTranslations = _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
    return _regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            return _context.abrupt("return", enApp);

          case 1:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _getFileForTranslations.apply(this, arguments);
}

export default getLocaleFile;