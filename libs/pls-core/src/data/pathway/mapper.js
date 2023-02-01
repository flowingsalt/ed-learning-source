import _slicedToArray from "@babel/runtime/helpers/slicedToArray";

function canJoin(event) {
  var today = new Date(new Date().toUTCString());
  var meetingJoinTime = new Date(new Date(event.startDateTime).getTime() - 15 * 60000);
  var meetingEndDateTime = new Date(event.startDateTime);
  meetingEndDateTime.setSeconds(meetingEndDateTime.getSeconds() + event.duration);
  return meetingEndDateTime.getTime() >= today.getTime() && today.getTime() > meetingJoinTime.getTime();
}

function checkForLiveEventRecording(eventInstances) {
  var recordingLinks = eventInstances === null || eventInstances === void 0 ? void 0 : eventInstances.filter(function (ei) {
    return ei.recordingLink && ei.hasParticipated;
  });

  if ((recordingLinks === null || recordingLinks === void 0 ? void 0 : recordingLinks.length) > 0) {
    return recordingLinks.reduce(function (a, b) {
      return a.startDateTime > b.startDateTime ? a : b;
    }).recordingLink;
  }

  return undefined;
}

export function mapAsset(_ref) {
  var id = _ref.id,
      publicationDate = _ref.publicationDate,
      filename = _ref.filename,
      assetFileType = _ref.assetFileType,
      altText = _ref.altText,
      contentLinkS3 = _ref.contentLinkS3;
  return {
    id: id,
    publicationDate: publicationDate,
    filename: filename,
    assetFileType: assetFileType,
    altText: altText,
    contentLinkS3: contentLinkS3
  };
}
export function mapResource(_ref2) {
  var id = _ref2.id,
      publicationDate = _ref2.publicationDate,
      topicResourceType = _ref2.topicResourceType,
      title = _ref2.title,
      reference = _ref2.reference,
      order = _ref2.order,
      asset = _ref2.asset;
  return {
    id: id,
    publicationDate: publicationDate,
    topicResourceType: topicResourceType,
    title: title,
    reference: reference,
    order: order,
    asset: asset ? mapAsset(asset) : null
  };
}
export function mapEventInstanceParticipation(_ref3) {
  var eventId = _ref3.eventId,
      zoomMeetingId = _ref3.zoomMeetingId,
      _ref3$eventInstancePa = _slicedToArray(_ref3.eventInstanceParticipation, 1),
      _ref3$eventInstancePa2 = _ref3$eventInstancePa[0],
      id = _ref3$eventInstancePa2.eventInstance.id,
      hmhUserId = _ref3$eventInstancePa2.hmhUserId,
      zoomRegistrantId = _ref3$eventInstancePa2.zoomRegistrantId,
      zoomRegistrantJoinLink = _ref3$eventInstancePa2.zoomRegistrantJoinLink,
      icsUrl = _ref3$eventInstancePa2.icsUrl;

  return {
    id: id,
    eventId: eventId,
    hmhUserId: hmhUserId,
    zoomRegistrantId: zoomRegistrantId,
    zoomRegistrantJoinLink: zoomRegistrantJoinLink,
    zoomMeetingId: zoomMeetingId,
    icsUrl: icsUrl
  };
}
export function mapEventInstance(_ref4, loadedParticipations, loadedAuthors) {
  var id = _ref4.id,
      zoomMeetingId = _ref4.zoomMeetingId,
      eventId = _ref4.eventId,
      startDateTime = _ref4.startDateTime,
      duration = _ref4.duration,
      type = _ref4.type,
      totalNumberSpots = _ref4.totalNumberSpots,
      recordingLink = _ref4.recordingLink,
      completedOn = _ref4.completedOn,
      availableSpots = _ref4.availableSpots,
      eventInstancePresenter = _ref4.eventInstancePresenter,
      eventInstanceParticipation = _ref4.eventInstanceParticipation,
      deletedOn = _ref4.deletedOn;
  var activeEventInstanceParticipation = loadedParticipations.map(mapEventInstanceParticipation).filter(function (p) {
    return p.id === id;
  })[0];
  var eventInstancePresenters = loadedAuthors.filter(function (a) {
    return eventInstancePresenter === null || eventInstancePresenter === void 0 ? void 0 : eventInstancePresenter.some(function (eip) {
      return a.id === eip.presenterId;
    });
  });
  var hasParticipated = Boolean(eventInstanceParticipation.length > 0);
  return {
    id: id,
    eventId: eventId,
    zoomMeetingId: zoomMeetingId,
    startDateTime: startDateTime,
    endDateTime: new Date(startDateTime).getTime() + duration * 1000,
    duration: duration,
    hasParticipated: hasParticipated,
    type: type,
    totalNumberSpots: totalNumberSpots,
    recordingLink: recordingLink,
    eventInstancePresenters: eventInstancePresenters,
    eventInstanceParticipation: activeEventInstanceParticipation,
    canJoin: canJoin({
      duration: duration,
      startDateTime: startDateTime
    }),
    isRegistered: Boolean(activeEventInstanceParticipation),
    completedOn: completedOn,
    availableSpots: availableSpots,
    deletedOn: deletedOn
  };
}
export function mapTopic(_ref5) {
  var _loadedEventInstances, _eventInstances$find;

  var topicId = _ref5.topicId,
      deletionDate = _ref5.deletionDate,
      title = _ref5.title,
      description = _ref5.description,
      topicType = _ref5.topicType,
      duration = _ref5.duration,
      recordingLink = _ref5.recordingLink,
      topicResources = _ref5.topicResources,
      completedOn = _ref5.completedOn,
      contentLinkS3 = _ref5.contentLinkS3,
      startedOn = _ref5.startedOn,
      deletedOn = _ref5.deletedOn;
  var loadedEventInstances = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  var loadedParticipations = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
  var loadedAuthors = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : [];
  var pathwayTitle = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
  var eventInstances = (_loadedEventInstances = loadedEventInstances[topicId]) === null || _loadedEventInstances === void 0 ? void 0 : _loadedEventInstances.map(function (ei) {
    return mapEventInstance(ei, loadedParticipations, loadedAuthors);
  });
  var liveEventRecordingLink = checkForLiveEventRecording(eventInstances);
  return {
    topicId: topicId,
    deletionDate: deletionDate,
    title: title,
    description: description,
    topicType: topicType,
    duration: duration,
    recordingLink: recordingLink,
    liveEventRecordingLink: liveEventRecordingLink,
    eventInstances: eventInstances,
    topicResources: topicResources === null || topicResources === void 0 ? void 0 : topicResources.map(mapResource),
    completedOn: completedOn,
    canJoin: Boolean(eventInstances === null || eventInstances === void 0 ? void 0 : eventInstances.some(function (instance) {
      return instance.canJoin;
    })),
    isRegistered: Boolean(eventInstances === null || eventInstances === void 0 ? void 0 : eventInstances.some(function (instance) {
      return instance.isRegistered;
    })),
    eventInstanceParticipation: eventInstances === null || eventInstances === void 0 ? void 0 : (_eventInstances$find = eventInstances.find(function (instance) {
      return instance.isRegistered;
    })) === null || _eventInstances$find === void 0 ? void 0 : _eventInstances$find.eventInstanceParticipation,
    contentLinkS3: contentLinkS3,
    startedOn: startedOn,
    deletedOn: deletedOn,
    pathwayTitle: pathwayTitle
  };
}
export function mapPathway(_ref6, loadedEventInstances, loadedParticipations, loadedAuthors) {
  var pathwayId = _ref6.pathwayId,
      title = _ref6.title,
      hmhPrograms = _ref6.hmhPrograms,
      discipline = _ref6.discipline,
      grades = _ref6.grades,
      topics = _ref6.topics;
  return {
    pathwayId: pathwayId,
    title: title,
    hmhPrograms: hmhPrograms,
    discipline: discipline,
    grades: grades,
    welcome: {
      title: title,
      welcomeContentLinkS3: 'https://s3.amazonaws.com/pls-pipeline.static-content.test/BlueGreen/INT/resources/resources.202012080225/contents/T021-HipHopTeacherMoves_MAY2022.zip/content/index.html#/lessons/uaqWel1rrFgaorKXbqquXkrxZOOnfY5h'
    },
    topics: topics === null || topics === void 0 ? void 0 : topics.map(function (t) {
      return mapTopic(t, loadedEventInstances, loadedParticipations, loadedAuthors);
    })
  };
}