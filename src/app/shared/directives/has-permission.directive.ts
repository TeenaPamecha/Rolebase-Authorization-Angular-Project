import { Directive, ViewContainerRef, TemplateRef, Input } from '@angular/core';

@Directive({
  selector: '[hasPermission]',
})
export class HasPermissionDirective {
  private currentUser=JSON.parse(localStorage.getItem('user'));
  private permissions = [];

  constructor(
    private viewContainer: ViewContainerRef,
    private templateRef: TemplateRef<any>
  ) {}

  private updateView() {
    if (this.checkPermission()) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }

  @Input()
  set hasPermission(val) {
    this.permissions = val;
    this.updateView();
  }

  private checkPermission() {
    if (!this.permissions.length) {
      return true;
    }
    const hasPermission = false;
    debugger;
    if (this.currentUser && this.currentUser.role != '') {
      const userRoles = this.currentUser.role;
      return this.permissions.some((permission) =>
        this.existPermission(userRoles, permission)
      );
    }

    return hasPermission;
  }

  existPermission(userRoles, permission): boolean {
    return userRoles.toUpperCase() === permission.toUpperCase();
  }
}
