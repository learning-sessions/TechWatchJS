import { Component } from '@angular/core';

@Component({
  selector: 'hero-card',
  inputs: ['details'],
  template: `
        <div class="caption">
	                <h3>{{details.email}}</h3>
	                <div>
	                    <p>
	                        <a role="button" data-toggle="collapse" (click)="toggleShowFilter()">
	                            More
	                        </a>
	                    </p>
	                    <div class="{{showFilter}}" >
	                        <p>
	                            {{details.details}}
	                        </p>
	                    </div>
	                    <div><a href="#" class="btn btn-primary" role="button">Button</a> <a href="#" class="btn btn-default" role="button">Button</a></div>
	                </div>
	            </div>
    `,
})
export class HeroCard {
  showFilter = 'hidden';
  toggleShowFilter() {
    this.showFilter = this.showFilter === 'hidden' ? 'show' : 'hidden';
  }
}
