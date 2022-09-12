var settings = jps.settings.main, markup = "";

var regions = jelastic.env.control.GetRegions(appid, session);
if (regions.result != 0) return regions;

if (regions.array.length < 3) {
  markup = "Package cannot be installed on less than 3 regions. Please contact support or choose a <a href='https://jelastic.cloud/?regions=multiregion' target='_blank'>provider</a> with more regions";
  settings.fields.push(
    {"type": "displayfield", "cls": "warning", "height": 30, "hideLabel": true, "markup": markup},
    {"type": "compositefield","height": 0,"hideLabel": true,"width": 0,"items": [{"height": 0,"type": "string","required": true}]}
  );
}

return {
    result: 0,
    settings: settings
};
