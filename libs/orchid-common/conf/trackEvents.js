/* istanbul ignore next */
var trackEvents = {
  "class": {
    toggle: 'manageProgram.classToggle'
  },
  subheader: {
    click: 'Subheader.clicked'
  },
  growthReport: {
    backToRenSkillsList: 'growthReport.backToRenSkillsList',
    backToRenClassReport: 'growthReport.backToRenClassReport',
    recommendedRenSkills: 'growthReport.recommendedRenSkills',
    recommendedSkillResources: 'growthReport.recommendedSkillResources',
    chipsBucketLoadMoreStudent: 'growthReport.chipsBucketLoadMoreStudent',
    classTableNextPage: 'growthReport.classTableNextPage',
    classTablePrevPage: 'growthReport.classTablePrevPage',
    classTablePageDropdown: 'growthReport.classTablePageDropdown'
  },
  manageGroups: {
    create: 'groups.create.clicked',
    save: 'groups.save.clicked',
    closeCreateGroupModal: 'groups.createGroupModal.close',
    closeCreateGroupModalConfirmCancel: 'groups.createGroupModal.closeConfirmCancel',
    closeCreateGroupModalConfirmSave: 'groups.createGroupModal.closeConfirmSave',
    closeCreateGroupModalConfirmNoSave: 'groups.createGroupModal.closeConfirmNoSave',
    studentListItemClick: 'groups.studentList.itemClick',
    createNewGroupButton: 'groups.createNewGroupButton',
    createGroupButton: 'groups.createGroupButton',
    editGroupMenuItem: 'groups.editGroupMenuItem',
    manageGroupListItemClick: 'groups.manageGroupListItemClick',
    manageGroupListItemMenuOpen: 'groups.manageGroupListItemMenuOpen',
    deleteGroupMenuItem: 'groups.deleteGroupMenuItem',
    deleteGroupDialogDeleteButton: 'groups.deleteGroupDialogDeleteButton',
    deleteGroupDialogCancelButton: 'groups.deleteGroupDialogCancelButton',
    deleteGroupDialogCloseButton: 'groups.deleteGroupDialogCloseButton',
    editSubGroupName: 'groups.editSubGroupName',
    editSubGroupNameMenuClick: 'groups.editSubGroupNameMenuClick',
    editSubGroupNameByMenu: 'groups.editSubGroupNameByMenu',
    deleteSubGroupMenuItem: 'groups.deleteSubGroupMenuItem',
    deleteSubGroupDialogDeleteButton: 'groups.deleteSubGroupDialogDeleteButton',
    deleteSubGroupDialogCancelButton: 'groups.deleteSubGroupDialogCancelButton',
    deleteSubGroupDialogCloseButton: 'groups.deleteSubGroupDialogCloseButton',
    recommendGroup: 'groups.recommendGroup',
    resourceRecommendationButton: 'groups.resourceRecommendationButton',
    nameChange: 'groups.nameChange',
    addToGroup: 'groups.addToGroup',
    selectMeatballMenu: 'groups.selectMeatballMenu',
    confirmNoSave: 'groups.closeCreateGroupModalConfirmNoSave',
    confirmSave: 'groups.closeCreateGroupModalConfirmSave'
  },
  assignmentDetails: {
    viewReport: 'AssignmentList.overview.viewReport',
    viewReportDisabled: 'AssignmentList.overview.viewReportDisabled',
    viewReportDisabledPopup: 'AssignmentList.overview.viewReportDisabledPopup',
    viewReportDisabledPopupClosed: 'AssignmentList.overview.viewReportDisabledPopupClosed',
    reportDisabledManagePrograms: 'AssignmentList.overview.reportDisabledManagePrograms'
  },
  resourceFitlers: {
    strandType: 'filterClicked.Instructional Purpose',
    dropdownTreeSelect: 'filterClicked.Table of Contents',
    genre: 'filterClicked.Genre',
    reset: 'filterClicked.resetFilters',
    textComplexity: 'filterAdjusted.Lexile',
    role: 'filterClicked.audience',
    productDisplayTitle: 'filterClicked.component',
    guidedReadingLevel: 'filterClicked.guidedReadingLevel'
  },
  plans: {
    createNewPlanButton: 'plans.createNewPlanButton',
    createNewPlanDone: 'plans.createNewPlanDoneButton',
    createNewPlanCancel: 'plans.createNewPlanCancelButton',
    planListItemClick: 'plans.planListItemClick',
    itemListItemClick: 'plans.itemListItemClick',
    deleteResource: 'plans.deleteResource',
    menuItemPlans: 'plans.menuItemPlans',
    menuItemMyAssessments: 'plans.menuItemMyAssessments',
    menuItemMyItems: 'plans.menuItemMyItems',
    noPlansGetStarted: 'plans.noPlansGetStartedButton',
    editPlanTitle: 'plans.editTitle',
    editPlanDescription: 'plans.editDescription',
    showDeleteModal: 'plans.showDeleteModal',
    planDelete: 'plans.delete',
    planCancelDelete: 'plans.cancelDelete',
    planCloseModalByX: 'plans.closeModalByX',
    plansListItemDropdown: 'plans.planListDropdown',
    plansReorderResource: 'plans.reorderResource',
    share: 'plans.share',
    openPlan: 'plans.openPlan',
    closeShareModal: 'plans.closeShareModal',
    modalShareButton: 'plans.modalShareButton',
    cancelShareModal: 'plans.cancelShareModal',
    duplicateLink: 'plans.duplicateLink',
    plansSharedWithMe: 'plans.plansSharedWithMe',
    planSharedWithMeClick: 'plans.planSharedWithMeClick',
    duplicateButton: 'plans.duplicatePlanButton'
  },
  assessments: {
    createNewAssessmentButton: 'assessments.createNewAssessmentButton',
    createNewItemButton: 'assessments.createNewItemButton',
    createNewAssessmentDone: 'assessments.createNewAssessmentDoneButton',
    createNewAssessmentCancel: 'assessments.createNewAssessmentCancelButton',
    createNewAssessmentProgramSelect: 'assessments.createNewAssessmentProgramSelect',
    createNewAssessmentDisciplineSelect: 'assessments.createNewAssessmentDisciplineSelect',
    assessmentListItemClick: 'assessments.assessmentListItemClick',
    closeAddItemModal: 'assessments.closeAddItemModal',
    saveAddItems: 'assessments.saveAddItems',
    viewItems: 'assessments.viewItems',
    programsDropdown: 'assessments.programsDropdown',
    menuSelect: 'assessments.menuSelect',
    addItemToMyAssessment: 'assessments.addItemToMyAssessment',
    removeItemFromMyAssessment: 'assessments.removeItemFromMyAssessment',
    viewItemInModal: 'assessments.viewItemInModal',
    backToAssessments: 'assessments.backToAssessments',
    confirmNoSave: 'assessments.confirmNoSave',
    confirmSave: 'assessments.confirmSave',
    programLevelAssessments: 'assessments.programLevelAssessments',
    editAssessmentTitle: 'assessments.editTitle',
    editAssessmentDescription: 'assessments.editAssessmentDescription',
    detailsDropdown: 'assessments.detailsDropdown',
    hmhItemsTab: 'assessments.hmhItemsTab',
    myItemsTab: 'assessments.myItemsTab',
    myItemsMenuAll: 'assessments.myItemsMenuAll',
    preview: 'assessments.preview',
    showPassage: 'assessments.showPassage',
    saveDone: 'assessments.saveAndDone',
    saveNext: 'assessments.saveAndNext',
    closeEditItemModal: 'assessments.closeEditItemModal',
    createNewItemDisciplineSelect: 'assessments.createNewItemDisciplineSelect'
  },
  addToPlanDialog: {
    closeXButton: 'addToPlanDialog.closeXButton',
    closeCancelButton: 'addToPlanDialog.closeCancelButton',
    addedToPlan: 'addToPlanDialog.addedToPlan',
    planSelected: 'addToPlanDialog.planSelected'
  },
  resourceCard: {
    open: function open(resourceId) {
      return "DiscoverResourceCard.Launch.".concat(resourceId);
    },
    assign: 'DiscoverResourceCard.Assign',
    addToPlan: 'DiscoverResourceCard.addToPlan',
    showDetails: 'DiscoverResourceCard.showDetails',
    hideDetails: 'DiscoverResourceCard.hideDetails',
    createDeeplink: 'DiscoverResourceCard.createDeeplink'
  },
  assessmentDetails: {
    assignButton: 'assessmentDetails.assignButton',
    addToPlanButton: 'assessmentDetails.addToPlanButton',
    studentPreviewButton: 'assessmentDetails.studentPreviewButton',
    addItemsButton: 'assessmentDetails.addItemsButton',
    deleteAssessment: 'assessmentDetails.deleteAssessment',
    duplicateAssessment: 'assessmentDetails.duplicateAssessment',
    duplicateLink: 'assessmentDetails.duplicateAssessmentLink',
    editItem: 'assessmentDetails.editItem',
    options: 'assessmentDetails.options',
    editItemModalCancel: 'assessmentDetails.editItemModalCancel',
    editItemModalButtonX: 'assessmentDetails.editItemModalButtonX',
    editItemModalEdit: 'assessmentDetails.editItemModalEdit',
    editItemModalDontShowAgain: 'assessmentDetails.editItemModalDontShowAgain',
    editItemPassageModalCancel: 'assessmentDetails.editItemPassageModalCancel',
    editItemPassageModalButtonX: 'assessmentDetails.editItemPassageModalButtonX',
    editItemNoSelectedAnswerModalButtonX: 'assessmentDetails.editItemNoSelectedAnswerModalButtonX',
    deleteAssessmentModalCancel: 'assessmentDetails.deleteAssessmentModalCancel',
    deleteAssessmentModalButtonX: 'assessmentDetails.deleteAssessmentModalButtonX',
    deleteAssessmentModalSubmit: 'assessmentDetails.deleteAssessmentModalSubmit'
  },
  standardDomainsReport: {
    proficiencyBandBar: 'datareporting.std.proficiencyBandBar'
  },
  multiSelect: {
    addNewButton: 'MultiSelect.addNewButton',
    remove: 'MultiSelect.removeButton'
  },
  manageClasses: {
    close: 'ManageClasses.Cancel',
    save: 'ManageClasses.Save'
  },
  studentModal: {
    launch: 'OpenUpdateStudentModal',
    launchAdd: 'OpenCreateStudentModal',
    launchBlockedByRostering: 'OpenUpdateStudentModalDisabledByRostering',
    lasid: 'AddNewStudentModal.EnterStudentNum',
    save: 'AddNewStudentModal.SavetoCreate',
    updateStudent: 'UpdateStudentModal.UpdateStudent',
    updateStudentPrefix: 'UpdateStudentModal.',
    addStudentPrefix: 'AddNewStudentModal.',
    removeStudent: 'EditStudentScreen.RemoveStudentFromClassOption',
    importStudent: 'ViewClassDetails.ImportStudentButton',
    moveStudentToClass: 'ImportStudentModal.SaveToAddStudentToClass',
    closeImport: 'ImportStudentModal.',
    addStudentInClass: 'EditStudentScreen.AddStudentInClass',
    removeStudentFromClass: 'EditStudentScreen.RemoveStudentFromClass',
    addStudentToSchool: 'EditStudentScreen.AddStudentToSchool',
    removeStudentFromSchool: 'EditStudentScreen.RemoveStudentFromSchool'
  },
  forgotPassword: {
    formSubmit: 'forgotPassword.PasswordResetRequest'
  },
  newPassword: {
    passwordNotValid: 'forgotPassword.Error.PasswordNotValid',
    formSubmit: 'forgotPassword.SetNewPassword'
  },
  registerForm: {
    passwordNotValid: 'AdminSelfRegister.Error.PasswordNotValid',
    usernameNotUnique: 'AdminSelfRegister.Error.UsernameNotUnique',
    onlineHelpLink: 'AdminSelfRegister.OnlineHelpLink'
  },
  loginForm: {
    forgotPassword: 'SignIn.ForgotPasswordLink'
  },
  integration: {
    manage: function manage(partnerCode) {
      return "IntegrationDashboard.manage.".concat(partnerCode);
    },
    activate: function activate(partnerCode) {
      return "IntegrationDashboard.activate.".concat(partnerCode);
    },
    cancelDsa: function cancelDsa(partnerCode) {
      return "IntegrationDashboard.cancelDsa.".concat(partnerCode);
    },
    agreeDsa: function agreeDsa(partnerCode) {
      return "IntegrationDashboard.agreeDsa.".concat(partnerCode);
    }
  },
  updateCatalog: {
    openUpdatesPage: 'InformationRibbon.openUpdatesPage',
    closeCallout: 'InformationRibbon.closeRibbon'
  },
  licenses: {
    programsTab: 'licenses.programsTab',
    integrationsTab: 'licenses.integrationsTab',
    commonCartridgesTab: 'licenses.commonCartridgesTab',
    view: function view(programCode) {
      return "licenses.view.".concat(programCode);
    },
    districtOrPrivateSchoolLicensesTab: 'licenses.districtOrPrivateSchoolLicensesTab',
    schoolLicensesTab: 'licenses.schoolLicensesTab',
    viewProgramDetails: "licenses.program.viewProgramDetails",
    viewSchool: 'licenses.details.viewSchool',
    selectStatus: 'licenses.details.selectStatus',
    selectProgram: 'licenses.details.selectProgram',
    selectSchool: 'licenses.details.selectSchool',
    productSettings: function productSettings(product) {
      return "licenses.productSettings.".concat(product);
    },
    expandAll: 'licenses.details.expandAll',
    collapseAll: 'licenses.details.collapseAll'
  },
  contentLaunch: {
    blocked: 'contentLaunch.blocked',
    shortLink: 'contentLaunch.shortLink'
  },
  createItem: {
    saveDone: 'createItem.saveDone',
    "continue": 'createItem.continue',
    closeCreateItemModalDisciplineSelect: 'createItem.closeCreateItemModalDisciplineSelect',
    closeCreateItemModalLearnosityEditor: 'createItem.closeCreateItemModalLearnosityEditor',
    noSelectedAnswerModalButtonX: 'createItem.noSelectedAnswerModalButtonX'
  },
  discover: {
    IntegratedProducts: 'discover.IntegratedProducts',
    searchTerms: 'discover.searchTerms',
    resourceWidget: 'Discover.ResourceWidget',
    resourceWidgetAllResources: 'Discover.keyResources.AllResources'
  },
  scoresList: {
    nextScoresPage: 'ScoresList.NextScoresPage',
    previousScoresPage: 'ScoresList.PreviousScoresPage',
    launchReview: 'ScoresList.launchReview',
    launchReadingList: 'ScoresList.launchReadingList',
    paginationDropdown: 'ScoresList.PaginationDropdown',
    scoresBreadcrumb: 'ScoresList.1a.breadcrumb',
    nameSort: 'ScoresList.Name.Sort',
    dueDateSort: 'ScoresList.DueDate.Sort',
    submitDateSort: 'ScoresList.SubmitDate.Sort'
  },
  resourceList: {
    pagination: {
      next: 'ResourceList.NextResourceListPage',
      previous: 'ResourceList.PreviousResourceListPage',
      paginationDropdown: 'ResourceList.PaginationDropdown'
    }
  },
  studentAssignmentList: {
    doneTabNameSort: 'StudentAssignmentList.DoneTab.Name.Sort',
    doneTabAssignmentFeedback: 'StudentAssignmentList.DoneTab.Feedback',
    doneTabDueDateSort: 'StudentAssignmentList.DoneTab.DueDate.Sort',
    doneTabSubmittedDateSort: 'StudentAssignmentList.DoneTab.SubmittedDate.Sort',
    overdueTabNameSort: 'StudentAssignmentList.OverdueTab.Name.Sort',
    overdueTabDueDateSort: 'StudentAssignmentList.OverdueTab.DueDate.Sort',
    toDoTabNameSort: 'StudentAssignmentList.ToDoTab.Name.Sort',
    toDoTabDueDateSort: 'StudentAssignmentList.ToDoTab.DueDate.Sort',
    assignmentSelected: 'StudentAssignmentList.Assignment.Selected',
    nameSort: 'StudentAssignmentList.Name.Sort',
    dueDateSort: 'StudentAssignmentList.DueDate.Sort',
    submitDateSort: 'StudentAssignmentList.SubmitDate.Sort',
    statusSortAttempt: 'StudentAssignmentList.Status.SortAttempt',
    instructionsModalContinue: 'StudentAssignmentList.DirectionsModal.Continue',
    instructionsModalCancel: 'StudentAssignmentList.DirectionsModal.CancelButton',
    instructionsModalXButton: 'StudentAssignmentList.DirectionsModal.XButton',
    launchReview: 'StudentAssignmentList.LaunchReview',
    todoTab: 'StudentAssignmentList.Tabs.ToDo',
    overdueTab: 'StudentAssignmentList.Tabs.Overdue',
    doneTab: 'StudentAssignmentList.Tabs.Done',
    studentAssignmentBreadcrumb: 'StudentAssignmentList.1a.breadcrumb',
    writableLaunch: 'StudentAssignmentList.writableLaunch',
    nextPage: 'StudentAssignmentList.NextAssignmentPage',
    previousPage: 'StudentAssignmentList.PreviousAssignmentPage',
    paginationDropdown: 'StudentAssignmentList.PaginationDropdown',
    buttons: {
      done: 'StudentAssignmentList.Assignment.imDone',
      start: 'StudentAssignmentList.Assignment.start',
      "continue": 'StudentAssignmentList.Assignment.continue',
      open: 'StudentAssignmentList.Assignment.open',
      review: 'StudentAssignmentList.Assignment.review'
    },
    assignmentBreadcrumb: 'StudentAssignmentList.1a.breadcrumb',
    feedbackModalXButton: 'StudentAssignmentList.FeedbackModal.XButton',
    feedbackModalXCancel: 'StudentAssignmentList.FeedbackModal.CancelButton'
  },
  adminReport: {
    navDrawer: {
      openButton: 'AdminReport.NavDrawer.OpenButton',
      gradeReports: 'AdminReport.NavDrawer.GradesDropdown',
      schoolReports: 'AdminReport.NavDrawer.SchoolsDropdown',
      navItem: 'AdminReport.NavDrawer.NavItem',
      sortSchools: 'AdminReport.NavDrawer.SortSchools'
    },
    popup: {
      navButton: 'AdminReport.Popup.navButton'
    }
  }
};
export default trackEvents;