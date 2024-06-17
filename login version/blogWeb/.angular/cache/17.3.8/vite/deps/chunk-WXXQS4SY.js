import {
  animate,
  query,
  stagger,
  state,
  style,
  transition,
  trigger
} from "./chunk-CMIECX7Q.js";
import {
  Directive,
  Input,
  NgModule,
  TemplateRef,
  ViewContainerRef,
  setClassMetadata,
  ɵɵNgOnChangesFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject
} from "./chunk-DYGEDNSY.js";

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-animation.mjs
var _AnimationDuration = class _AnimationDuration {
  // Tooltip
};
_AnimationDuration.SLOW = "0.3s";
_AnimationDuration.BASE = "0.2s";
_AnimationDuration.FAST = "0.1s";
var AnimationDuration = _AnimationDuration;
var _AnimationCurves = class _AnimationCurves {
};
_AnimationCurves.EASE_BASE_OUT = "cubic-bezier(0.7, 0.3, 0.1, 1)";
_AnimationCurves.EASE_BASE_IN = "cubic-bezier(0.9, 0, 0.3, 0.7)";
_AnimationCurves.EASE_OUT = "cubic-bezier(0.215, 0.61, 0.355, 1)";
_AnimationCurves.EASE_IN = "cubic-bezier(0.55, 0.055, 0.675, 0.19)";
_AnimationCurves.EASE_IN_OUT = "cubic-bezier(0.645, 0.045, 0.355, 1)";
_AnimationCurves.EASE_OUT_BACK = "cubic-bezier(0.12, 0.4, 0.29, 1.46)";
_AnimationCurves.EASE_IN_BACK = "cubic-bezier(0.71, -0.46, 0.88, 0.6)";
_AnimationCurves.EASE_IN_OUT_BACK = "cubic-bezier(0.71, -0.46, 0.29, 1.46)";
_AnimationCurves.EASE_OUT_CIRC = "cubic-bezier(0.08, 0.82, 0.17, 1)";
_AnimationCurves.EASE_IN_CIRC = "cubic-bezier(0.6, 0.04, 0.98, 0.34)";
_AnimationCurves.EASE_IN_OUT_CIRC = "cubic-bezier(0.78, 0.14, 0.15, 0.86)";
_AnimationCurves.EASE_OUT_QUINT = "cubic-bezier(0.23, 1, 0.32, 1)";
_AnimationCurves.EASE_IN_QUINT = "cubic-bezier(0.755, 0.05, 0.855, 0.06)";
_AnimationCurves.EASE_IN_OUT_QUINT = "cubic-bezier(0.86, 0, 0.07, 1)";
var AnimationCurves = _AnimationCurves;
var collapseMotion = trigger("collapseMotion", [
  state("expanded", style({ height: "*" })),
  state("collapsed", style({ height: 0, overflow: "hidden" })),
  state("hidden", style({ height: 0, overflow: "hidden", borderTopWidth: "0" })),
  transition("expanded => collapsed", animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
  transition("expanded => hidden", animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
  transition("collapsed => expanded", animate(`150ms ${AnimationCurves.EASE_IN_OUT}`)),
  transition("hidden => expanded", animate(`150ms ${AnimationCurves.EASE_IN_OUT}`))
]);
var treeCollapseMotion = trigger("treeCollapseMotion", [
  transition("* => *", [
    query("nz-tree-node:leave,nz-tree-builtin-node:leave", [
      style({ overflow: "hidden" }),
      stagger(0, [
        animate(`150ms ${AnimationCurves.EASE_IN_OUT}`, style({ height: 0, opacity: 0, "padding-bottom": 0 }))
      ])
    ], {
      optional: true
    }),
    query("nz-tree-node:enter,nz-tree-builtin-node:enter", [
      style({ overflow: "hidden", height: 0, opacity: 0, "padding-bottom": 0 }),
      stagger(0, [
        animate(`150ms ${AnimationCurves.EASE_IN_OUT}`, style({ overflow: "hidden", height: "*", opacity: "*", "padding-bottom": "*" }))
      ])
    ], {
      optional: true
    })
  ])
]);
var drawerMaskMotion = trigger("drawerMaskMotion", [
  transition(":enter", [style({ opacity: 0 }), animate(`${AnimationDuration.SLOW}`, style({ opacity: 1 }))]),
  transition(":leave", [style({ opacity: 1 }), animate(`${AnimationDuration.SLOW}`, style({ opacity: 0 }))])
]);
var fadeMotion = trigger("fadeMotion", [
  transition("* => enter", [style({ opacity: 0 }), animate(`${AnimationDuration.BASE}`, style({ opacity: 1 }))]),
  transition("* => leave, :leave", [style({ opacity: 1 }), animate(`${AnimationDuration.BASE}`, style({ opacity: 0 }))])
]);
var helpMotion = trigger("helpMotion", [
  transition(":enter", [
    style({
      opacity: 0,
      transform: "translateY(-5px)"
    }),
    animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT}`, style({
      opacity: 1,
      transform: "translateY(0)"
    }))
  ]),
  transition(":leave", [
    style({
      opacity: 1,
      transform: "translateY(0)"
    }),
    animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT}`, style({
      opacity: 0,
      transform: "translateY(-5px)"
    }))
  ])
]);
var moveUpMotion = trigger("moveUpMotion", [
  transition("* => enter", [
    style({
      transformOrigin: "0 0",
      transform: "translateY(-100%)",
      opacity: 0
    }),
    animate(`${AnimationDuration.BASE}`, style({
      transformOrigin: "0 0",
      transform: "translateY(0%)",
      opacity: 1
    }))
  ]),
  transition("* => leave", [
    style({
      transformOrigin: "0 0",
      transform: "translateY(0%)",
      opacity: 1
    }),
    animate(`${AnimationDuration.BASE}`, style({
      transformOrigin: "0 0",
      transform: "translateY(-100%)",
      opacity: 0
    }))
  ])
]);
var notificationMotion = trigger("notificationMotion", [
  state("enterRight", style({ opacity: 1, transform: "translateX(0)" })),
  transition("* => enterRight", [style({ opacity: 0, transform: "translateX(5%)" }), animate("100ms linear")]),
  state("enterLeft", style({ opacity: 1, transform: "translateX(0)" })),
  transition("* => enterLeft", [style({ opacity: 0, transform: "translateX(-5%)" }), animate("100ms linear")]),
  state("enterTop", style({ opacity: 1, transform: "translateY(0)" })),
  transition("* => enterTop", [style({ opacity: 0, transform: "translateY(-5%)" }), animate("100ms linear")]),
  state("enterBottom", style({ opacity: 1, transform: "translateY(0)" })),
  transition("* => enterBottom", [style({ opacity: 0, transform: "translateY(5%)" }), animate("100ms linear")]),
  state("leave", style({
    opacity: 0,
    transform: "scaleY(0.8)",
    transformOrigin: "0% 0%"
  })),
  transition("* => leave", [
    style({
      opacity: 1,
      transform: "scaleY(1)",
      transformOrigin: "0% 0%"
    }),
    animate("100ms linear")
  ])
]);
var ANIMATION_TRANSITION_IN = `${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_QUINT}`;
var ANIMATION_TRANSITION_OUT = `${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_QUINT}`;
var slideMotion = trigger("slideMotion", [
  state("void", style({
    opacity: 0,
    transform: "scaleY(0.8)"
  })),
  state("enter", style({
    opacity: 1,
    transform: "scaleY(1)"
  })),
  transition("void => *", [animate(ANIMATION_TRANSITION_IN)]),
  transition("* => void", [animate(ANIMATION_TRANSITION_OUT)])
]);
var slideAlertMotion = trigger("slideAlertMotion", [
  transition(":leave", [
    style({ opacity: 1, transform: "scaleY(1)", transformOrigin: "0% 0%" }),
    animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_OUT_CIRC}`, style({
      opacity: 0,
      transform: "scaleY(0)",
      transformOrigin: "0% 0%"
    }))
  ])
]);
var tabSwitchMotion = trigger("tabSwitchMotion", [
  state("leave", style({
    display: "none"
  })),
  transition("* => enter", [
    style({
      display: "block",
      opacity: 0
    }),
    animate(AnimationDuration.SLOW)
  ]),
  transition("* => leave, :leave", [
    style({
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%"
    }),
    animate(AnimationDuration.SLOW, style({
      opacity: 0
    })),
    style({
      display: "none"
    })
  ])
]);
var thumbMotion = trigger("thumbMotion", [
  state("from", style({ transform: "translateX({{ transform }}px)", width: "{{ width }}px" }), {
    params: { transform: 0, width: 0 }
  }),
  state("to", style({ transform: "translateX({{ transform }}px)", width: "{{ width }}px" }), {
    params: { transform: 100, width: 0 }
  }),
  transition("from => to", animate(`300ms ${AnimationCurves.EASE_IN_OUT}`))
]);
var zoomBigMotion = trigger("zoomBigMotion", [
  transition("void => active", [
    style({ opacity: 0, transform: "scale(0.8)" }),
    animate(`${AnimationDuration.BASE} ${AnimationCurves.EASE_OUT_CIRC}`, style({
      opacity: 1,
      transform: "scale(1)"
    }))
  ]),
  transition("active => void", [
    style({ opacity: 1, transform: "scale(1)" }),
    animate(`${AnimationDuration.BASE} ${AnimationCurves.EASE_IN_OUT_CIRC}`, style({
      opacity: 0,
      transform: "scale(0.8)"
    }))
  ])
]);
var zoomBadgeMotion = trigger("zoomBadgeMotion", [
  transition(":enter", [
    style({ opacity: 0, transform: "scale(0) translate(50%, -50%)" }),
    animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_OUT_BACK}`, style({
      opacity: 1,
      transform: "scale(1) translate(50%, -50%)"
    }))
  ]),
  transition(":leave", [
    style({ opacity: 1, transform: "scale(1) translate(50%, -50%)" }),
    animate(`${AnimationDuration.SLOW} ${AnimationCurves.EASE_IN_BACK}`, style({
      opacity: 0,
      transform: "scale(0) translate(50%, -50%)"
    }))
  ])
]);

// node_modules/ng-zorro-antd/fesm2022/ng-zorro-antd-core-outlet.mjs
var _NzStringTemplateOutletDirective = class _NzStringTemplateOutletDirective {
  static ngTemplateContextGuard(_dir, _ctx) {
    return true;
  }
  recreateView() {
    this.viewContainer.clear();
    const isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
    const templateRef = isTemplateRef ? this.nzStringTemplateOutlet : this.templateRef;
    this.embeddedViewRef = this.viewContainer.createEmbeddedView(templateRef, isTemplateRef ? this.nzStringTemplateOutletContext : this.context);
  }
  updateContext() {
    const isTemplateRef = this.nzStringTemplateOutlet instanceof TemplateRef;
    const newCtx = isTemplateRef ? this.nzStringTemplateOutletContext : this.context;
    const oldCtx = this.embeddedViewRef.context;
    if (newCtx) {
      for (const propName of Object.keys(newCtx)) {
        oldCtx[propName] = newCtx[propName];
      }
    }
  }
  constructor(viewContainer, templateRef) {
    this.viewContainer = viewContainer;
    this.templateRef = templateRef;
    this.embeddedViewRef = null;
    this.context = new NzStringTemplateOutletContext();
    this.nzStringTemplateOutletContext = null;
    this.nzStringTemplateOutlet = null;
  }
  ngOnChanges(changes) {
    const {
      nzStringTemplateOutletContext,
      nzStringTemplateOutlet
    } = changes;
    const shouldRecreateView = () => {
      let shouldOutletRecreate = false;
      if (nzStringTemplateOutlet) {
        if (nzStringTemplateOutlet.firstChange) {
          shouldOutletRecreate = true;
        } else {
          const isPreviousOutletTemplate = nzStringTemplateOutlet.previousValue instanceof TemplateRef;
          const isCurrentOutletTemplate = nzStringTemplateOutlet.currentValue instanceof TemplateRef;
          shouldOutletRecreate = isPreviousOutletTemplate || isCurrentOutletTemplate;
        }
      }
      const hasContextShapeChanged = (ctxChange) => {
        const prevCtxKeys = Object.keys(ctxChange.previousValue || {});
        const currCtxKeys = Object.keys(ctxChange.currentValue || {});
        if (prevCtxKeys.length === currCtxKeys.length) {
          for (const propName of currCtxKeys) {
            if (prevCtxKeys.indexOf(propName) === -1) {
              return true;
            }
          }
          return false;
        } else {
          return true;
        }
      };
      const shouldContextRecreate = nzStringTemplateOutletContext && hasContextShapeChanged(nzStringTemplateOutletContext);
      return shouldContextRecreate || shouldOutletRecreate;
    };
    if (nzStringTemplateOutlet) {
      this.context.$implicit = nzStringTemplateOutlet.currentValue;
    }
    const recreateView = shouldRecreateView();
    if (recreateView) {
      this.recreateView();
    } else {
      this.updateContext();
    }
  }
};
_NzStringTemplateOutletDirective.ɵfac = function NzStringTemplateOutletDirective_Factory(t) {
  return new (t || _NzStringTemplateOutletDirective)(ɵɵdirectiveInject(ViewContainerRef), ɵɵdirectiveInject(TemplateRef));
};
_NzStringTemplateOutletDirective.ɵdir = ɵɵdefineDirective({
  type: _NzStringTemplateOutletDirective,
  selectors: [["", "nzStringTemplateOutlet", ""]],
  inputs: {
    nzStringTemplateOutletContext: "nzStringTemplateOutletContext",
    nzStringTemplateOutlet: "nzStringTemplateOutlet"
  },
  exportAs: ["nzStringTemplateOutlet"],
  standalone: true,
  features: [ɵɵNgOnChangesFeature]
});
var NzStringTemplateOutletDirective = _NzStringTemplateOutletDirective;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzStringTemplateOutletDirective, [{
    type: Directive,
    args: [{
      selector: "[nzStringTemplateOutlet]",
      exportAs: "nzStringTemplateOutlet",
      standalone: true
    }]
  }], () => [{
    type: ViewContainerRef
  }, {
    type: TemplateRef
  }], {
    nzStringTemplateOutletContext: [{
      type: Input
    }],
    nzStringTemplateOutlet: [{
      type: Input
    }]
  });
})();
var NzStringTemplateOutletContext = class {
};
var _NzOutletModule = class _NzOutletModule {
};
_NzOutletModule.ɵfac = function NzOutletModule_Factory(t) {
  return new (t || _NzOutletModule)();
};
_NzOutletModule.ɵmod = ɵɵdefineNgModule({
  type: _NzOutletModule,
  imports: [NzStringTemplateOutletDirective],
  exports: [NzStringTemplateOutletDirective]
});
_NzOutletModule.ɵinj = ɵɵdefineInjector({});
var NzOutletModule = _NzOutletModule;
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NzOutletModule, [{
    type: NgModule,
    args: [{
      imports: [NzStringTemplateOutletDirective],
      exports: [NzStringTemplateOutletDirective]
    }]
  }], null, null);
})();

export {
  helpMotion,
  moveUpMotion,
  notificationMotion,
  zoomBigMotion,
  NzStringTemplateOutletDirective,
  NzOutletModule
};
//# sourceMappingURL=chunk-WXXQS4SY.js.map
