/* ************************************************************************

    qxroddot - a simple reddit feed browser being built with qooxdoo and rails

    Copyright:
        2010 - Muhammet S. AYDIN

    License:
        GPL: http://www.gnu.org/licenses/gpl.html
        See the LICENSE file in the project's top-level directory for details.

   Authors:
        Muhammet S. AYDIN (mengu)

************************************************************************ */
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

    var appInfo = this.tr("A reddit app with Qooxdoo & Rails");

    this.add(new qx.ui.basic.Label(this.tr("Qx Roddot")));
    this.add(new qx.ui.core.Spacer, { flex : 1 });
    this.add(new qx.ui.basic.Label(appInfo));
  }
});
