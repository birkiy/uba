;/*FB_PKG_DELIM*/

__d("PolarisGuideStrings",["fbt"],(function(a,b,c,d,e,f,g,h){"use strict";function a(a,b){b===void 0&&(b="posts");switch(b){case"locations":return a===1?h._("1 place"):h._("{number of places} places",[h._param("number of places",a)]);case"accounts":return a===1?h._("1 account"):h._("{number of accounts} ACCOUNTS",[h._param("number of accounts",a)]);case"products":return a===1?h._("1 product"):h._("{number of products} products",[h._param("number of products",a)]);default:return a===1?h._("1 POST"):h._("{number of posts} POSTS",[h._param("number of posts",a)])}}function b(a,b){return h._("{guide author full name} on Instagram: {guide title}",[h._param("guide author full name",a),h._param("guide title",b)])}function c(a){return h._("NO. {guide item number}",[h._param("guide item number",a)])}d=h._("Post Unavailable");e=h._("This post is unavailable.");f=h._("View Guide");var i=h._("More options");g.getGuideNumberOfItemsText=a;g.getPageTitleForGuides=b;g.getGuideItemNumberLabel=c;g.GUIDE_ITEM_POST_UNAVAILABLE_HEADER=d;g.GUIDE_ITEM_POST_UNAVAILABLE_BODY=e;g.VIEW_GUIDE_STORY_CTA=f;g.OPTIONS_ALT_TEXT=i}),98);
__d("polarisWebReportSelectors",[],(function(a,b,c,d,e,f){"use strict";function a(a){return a.webReport.commentReportMode}function b(a){return a.webReport.userReportMode}function c(a){return a.webReport.category}function d(a){return a.webReport.isProcessing}f.getCommentReportMode=a;f.getUserReportMode=b;f.getReportCategory=c;f.getReportIsProcessing=d}),66);
__d("PolarisInternalBadge.react",["cx","fbt","IGDSText.react","react"],(function(a,b,c,d,e,f,g,h,i){"use strict";var j=d("react"),k=i._("Internal");function a(){var a=j.jsx(c("IGDSText.react").Body2Emphasized,{color:"webAlwaysWhite",children:k});return j.jsx("div",{className:"_aars",children:a})}a.displayName=a.name+" [from "+f.id+"]";g["default"]=a}),98);
__d("PolarisIgGuideEntryFalcoEvent",["PolarisFalcoLogger"],(function(a,b,c,d,e,f,g){"use strict";var h={falco:!0,pigeon:!1};a={log:function(a){d("PolarisFalcoLogger").FalcoLogger.log("guide_entry",a(),{},h)}};b=a;g["default"]=b}),98);
__d("PolarisGuideLogger",["PolarisIgGuideEntryFalcoEvent"],(function(a,b,c,d,e,f,g){"use strict";function a(a){var b=a.entryPoint,d=a.guideID;c("PolarisIgGuideEntryFalcoEvent").log(function(){return{module:"guide_detail",entry_point:b,guide_id:d}})}g.logGuideEntry=a}),98);