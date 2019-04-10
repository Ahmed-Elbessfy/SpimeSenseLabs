var AddContactPlugin = (function () {
  var AddContactPlugin = function () {

    var self = this;
    MOT_Plugin.call(this);
    self.PluginType = "AddContactPlugin";
    self.SetParameterValue("PluginName", self.PluginType);
    self.SetParameterValue("PluginWidth", 90);
    self.SetParameterValue("PluginHeight", 40);

    delete self.Parameters.DataSource;
    delete self.Parameters.Query;

    self.Parameters.Website = self.addPluginParameters("Website", "input", "www.google.com", "Support Website", "add support website for clients support");
    self.Parameters.Text = self.addPluginParameters("Text", "input", "support", "Text Displayed", "determine which text will represent the website");
    self.Parameters.Target = self.addPluginParameters("target", "True/False", 0, "Open NEw Tab", "Decide to open or don't open new tab on link clicked");
    self.Parameters.TextDecoration = self.addPluginParameters("TextDecoration", "Select", ["underline", "none", "line-through", "overline"], "text-decoration", "define link decoration style from a list of available options");
    self.Parameters.addProperty("SelectedValue", "underline");
    self.Parameters.FontFamily = self.addPluginParameters("FontFamily", "Select", ["Arial", "Courrier New", "Times New Roman"], "Font Family", "The fontFamily property sets a list of font-family names for text");
    self.Parameters.FontFamily.addProperty("SelectedValue", "Arial");
    self.Parameters.FontSize = self.addPluginParameters("FontSize", "input", 14, "Font Size", "The fontSize property sets the font size of the text in pixels");
    self.Parameters.FontStyle = self.addPluginParameters("FontStyle", "Select", ["normal", "italic", "oblique", "initial"], "Font Style", "The fontStyle property sets or returns whether the style of the font is normal, italic or oblique");
    self.Parameters.FontStyle.addProperty("SelectedValue", "normal");
    self.Parameters.FontWeight = self.addPluginParameters("FontWeight", "Select", ["normal", "bold", "bolder", "lighter", "100", "200", "300", "400", "500", "600", "700", "800", "900"], "Font Weight", "The fontWeight property sets or returns how thick or thin characters in a text should be displayed.");
    self.Parameters.FontWeight.addProperty("SelectedValue", "normal");
    self.Parameters.FontColor = self.addPluginParameters("FontColor", "color", "", "Font Color", "Font color");
  };

  extend(MOT_Plugin, AddContactPlugin);

  AddContactPlugin.prototype.Draw = function (WorkSpace) {
    var self = this;
    self.GEtPlugin(WorkSpace);
    var a = document.createElement("a");
    WorkSpace.appendChild(a);
    a.innerText = self.GetParameterValue("Text");
    a.href = self.GetParameterValue("Website");
    if (self.GetParameterValue("Target") == 1) {
      self.SetParameterValue("target", "_blank");
    };
    a.style.top = self.GetParameterValue("LocationY") + "px";
    a.style.left = self.GetParameterValue("LocationX") + "px";
    a.style.width = self.GetParameterValue("PluginWidth") + "px";
    a.style.height = self.GetParameterValue("PluginHeight") + "px";
    a.style.textDecoration = self.GetParameterValue("TextDecoration").SelectedValue;
    a.style.fontFamily = self.GetParameterByName("FontFamily").SelectedValue;
    a.style.fontSize = self.GetParameterValue("FontSize") + "px";
    a.style.fontStyle = self.GetParameterByName("FontStyle").SelectedValue;
    a.style.fontWeight = self.GetParameterByName("FontWeight").SelectedValue;
    a.style.color = self.GetParameterValue("FontColor");
  };

  return AddContactPlugin;

}());