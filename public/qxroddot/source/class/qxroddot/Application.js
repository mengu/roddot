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

/* ************************************************************************

#asset(qxroddot/*)

************************************************************************ */

/**
 * This is the main application class of your custom application "qxroddot"
 */
qx.Class.define("qxroddot.Application",
{
    extend : qx.application.Standalone,



    /*
  *****************************************************************************
     MEMBERS
  *****************************************************************************
  */

    members :
    {
        /**
     * This method contains the initial application code and gets called 
     * during startup of the application
     * 
     * @lint ignoreDeprecated(alert)
     */
        main : function()
        {
            // Call super class
            this.base(arguments);

            // Enable logging in debug variant
            if (qx.core.Variant.isSet("qx.debug", "on"))
            {
                // support native logging capabilities, e.g. Firebug for Firefox
                qx.log.appender.Native;
                // support additional cross-browser console. Press F7 to toggle visibility
                qx.log.appender.Console;
            }

            /*
      -------------------------------------------------------------------------
        Below is your actual application code...
      -------------------------------------------------------------------------
      */
            // Document is the application root
            var doc = this.getRoot();
      
            // container layout
            var layout = new qx.ui.layout.VBox();

            // main container
            var mainContainer = new qx.ui.container.Composite(layout);
            doc.add(mainContainer, {
                edge : 0
            });
      
            mainContainer.add(new qxroddot.view.Header(), {
                flex : 0
            });
      
            var box = new qx.ui.layout.HBox();
            var secondContainer = new qx.ui.container.Composite(box);
            secondContainer.setMarginTop(20);
            secondContainer.setMarginLeft(5);
            mainContainer.add(secondContainer);
      
            redditTree = new qx.ui.tree.Tree().set({
                width : 200,
                height : 400
            });
            var reddits = new qx.ui.tree.TreeFolder("Reddits");
            var programmingReddit = new qx.ui.tree.TreeFolder("Programming");
            var pythonReddit = new qx.ui.tree.TreeFolder("Python");
            var djangoReddit = new qx.ui.tree.TreeFolder("Django");
            var rubyReddit = new qx.ui.tree.TreeFolder("Ruby");
            var railsReddit = new qx.ui.tree.TreeFolder("Rails");
            var scalaReddit = new qx.ui.tree.TreeFolder("Scala");
            var clojureReddit = new qx.ui.tree.TreeFolder("Clojure");
            var javaReddit = new qx.ui.tree.TreeFolder("Java");
            var lispReddit = new qx.ui.tree.TreeFolder("Lisp");
            var wtfReddit = new qx.ui.tree.TreeFolder("WTF");
            reddits.add(programmingReddit, pythonReddit, djangoReddit, rubyReddit,
                railsReddit, scalaReddit, clojureReddit, javaReddit, lispReddit, wtfReddit);
            reddits.setOpen(true);
            redditTree.setRoot(reddits);
            redditTree.setHideRoot(true);
            secondContainer.add(redditTree);
      
            textLabel = new qx.ui.basic.Label().set({
                rich : true,
                width: 700
            });
            textLabel.setMarginLeft(10);

            var scrollContainer = new qx.ui.container.Scroll();
            scrollContainer.set({
                width: 700,
                height: 500,
                marginLeft: 20
            });
            scrollContainer.add(textLabel);
            secondContainer.add(scrollContainer);

            var treeItems = redditTree.getItems();
            var treeItemCount = treeItems.length;
            for (var i = 0; i < treeItemCount; ++i) {
                treeItems[i].addListener("dblclick", function(e) {
                    var selection = redditTree.getSelection();
                    if (selection.length > 0) {
                        var redditName = selection[0].getLabel().toLowerCase();
                        var req = new qx.io.remote.Request("/feeds/"+redditName, "GET", "text/html");
                        req.addListener("completed", function(evt) {
                            textLabel.setValue(evt.getContent());
                        })
                        req.send();
                    }
                })
            }
      
        }
    }
});
