/**
 * Application header widget.
 */
qx.Class.define("qxroddot.view.Header",
{
  extend : qx.ui.container.Composite,

  construct : function()
  {
    this.base(arguments, new qx.ui.layout.HBox());
    this.setAppearance("app-header");

    var versionTag = this.tr("A reddit app with Qooxdoo & Rails");

    this.add(new qx.ui.basic.Label(this.tr("Qx Roddot")));
    this.add(new qx.ui.core.Spacer, { flex : 1 });
    this.add(new qx.ui.basic.Label(versionTag));
  }
});
