__d("PolarisMaybeInstantPostModal.react",["cr:874"],function(o,t,s,e,a,i,l){"use strict";l["default"]=t("cr:874")},98),__d("PolarisMediaBrowserPostModal.react",["invariant","PolarisIsLoggedInDesktop","PolarisMaybeInstantPostModal.react","PolarisPost.react","PolarisPostVariants","PolarisReactRedux","PolarisRoutes","nullthrows","polarisPostSelectors","react"],function(o,t,s,e,a,i,l,r){"use strict";function o(o){var t=o.analyticsContext,a=o.combinedPosts,i=o.mediaLinkBuilder,l=o.modalEntryPath,P=o.onClose,c=o.onImpression,u=o.onOpen,p=o.postId,m=e("PolarisReactRedux").useSelector(function(o){return e("polarisPostSelectors").getDeletedIds(o)});o=a.map(function(o){return o.id});var I=e("PolarisReactRedux").useSelector(function(o){return e("polarisPostSelectors").getPostOrNullById(o,p)});return d(function(){null==I&&(m.includes(p)||r(0,51476),P())},[m,P,I,p]),null==I?null:n.jsx(s("PolarisMaybeInstantPostModal.react"),{analyticsContext:t,combinedPostIds:o,dimensions:I.dimensions,mediaLinkBuilder:i,modalEntryPath:null!=l&&""!==l?l:e("PolarisRoutes").FEED_PATH,onClose:P,onOpen:u,postCode:s("nullthrows")(I.code),postId:p,children:n.jsx(s("PolarisPost.react"),{analyticsContext:t+"Modal",autoplay:e("PolarisIsLoggedInDesktop").isLoggedInDesktop(),id:p,isVisible:!0,onImpression:c,variant:e("PolarisPostVariants").VARIANTS.flexible,visiblePosition:0})})}var n=e("react"),d=e("react").useEffect;o.displayName=o.name+" [from "+i.id+"]",l["default"]=o},98),__d("PolarisClipsItemModal.react",["IGRouter","PolarisClipsHelpers","PolarisLinkBuilder","PolarisPost.react","PolarisPostModal.react","PolarisPostVariants","nullthrows","react"],function(o,t,s,e,a,i,l){"use strict";function o(o){var t=o.analyticsContext,a=o.clips,i=o.history,l=o.onClose,d=o.onOpen;o=o.postId,i=n(i.location.pathname);var P=e("PolarisClipsHelpers").getClipItemFromPostID(a,o);return P?(a=a.map(function(o){return s("nullthrows")(null==(o=o.media)?void 0:o.pk)}),r.jsx(s("PolarisPostModal.react"),{analyticsContext:t,combinedPostIds:a,dimensions:e("PolarisClipsHelpers").getClipDimensionsFromItemDict(P),mediaLinkBuilder:e("PolarisLinkBuilder").buildClipsMediaLink,modalEntryPath:i.current,onClose:l,onOpen:d,postCode:s("nullthrows")(null==(a=P.media)?void 0:a.code),postId:o,children:r.jsx(s("PolarisPost.react"),{analyticsContext:t+"Modal",autoplay:!0,id:o,isVisible:!0,variant:e("PolarisPostVariants").VARIANTS.flexible,visiblePosition:0})})):null}var r=e("react"),n=e("react").useRef;o.displayName=o.name+" [from "+i.id+"]",t=e("IGRouter").withIGRouter(o),l["default"]=t},98),__d("PolarisInstantPostModal.react",["PolarisPostModalInternal.react","PolarisProfileTabTaggedPhotosConstants","polarisPostModalHelpers","react","usePolarisPost"],function(o,t,s,e,a,i,l){"use strict";function o(o){var t,a=!1,i=!1,l="profilePageModal"===e("polarisPostModalHelpers").getModalPageIdFromAnalyticsContext(o.analyticsContext);return t=!0===(null==(t=o.modalEntryPath)?void 0:t.endsWith("/"+e("PolarisProfileTabTaggedPhotosConstants").TAGGED_TAB_ID+"/")),l&&!t&&(a=!0),l=e("usePolarisPost").usePost(o.postId,function(o){return o.isVideo}),t&&!0===l&&(i=!0),r.jsx(s("PolarisPostModalInternal.react"),babelHelpers["extends"]({},o,{showLoadingShimmer:i,skipMediaInfo:a}))}var r=e("react");o.displayName=o.name+" [from "+i.id+"]",l["default"]=o},98);