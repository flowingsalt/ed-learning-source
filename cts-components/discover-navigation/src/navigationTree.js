import PlaceholderSvgMd from '@ed/baseline/icons/cts/rubrics-lg.svg';
import ReferenceMaterialsIcon from '@ed/baseline/icons/cts/reference-materials-lg.svg';
import StandardsIcon from '@ed/baseline/icons/cts/standards-lg.svg';
import ConnectedSolutionsIcon from '@ed/baseline/icons/cts/professional-development-lg.svg';

var navigationTree = function navigationTree(programType, programId, showProgramPage, showConnectedSolutions, showStandards, showKeyResourses) {
  var tree = [];

  if (programType && showProgramPage) {
    tree.push({
      name: programType,
      to: "/discover/".concat(programId),
      svg: PlaceholderSvgMd,
      exact: true,
      translated: false
    });
  }

  if (showConnectedSolutions) {
    tree.push({
      name: "discover.tertiaryNav.connectedSolutions",
      to: "/discover/".concat(programId, "/connected-view"),
      svg: ConnectedSolutionsIcon,
      translated: true
    });
  }

  if (showStandards) {
    tree.push({
      name: "discover.tertiaryNav.standards",
      to: "/discover/".concat(programId, "/standards-view"),
      svg: StandardsIcon,
      translated: true
    });
  }

  if (showKeyResourses) {
    tree.push({
      name: "discover.tertiaryNav.allResources",
      to: "/discover/".concat(programId, "/keyresources-view"),
      svg: ReferenceMaterialsIcon,
      translated: true
    });
  }

  return tree;
};

export default navigationTree;