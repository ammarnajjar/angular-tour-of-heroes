import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsModule }    from '@angular/forms';
import { APP_BASE_HREF } from '@angular/common';
import { AppRoutingModule } from '../app-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from '../hero-detail/hero-detail.component';
import { HeroesComponent } from '../heroes/heroes.component';
import { HttpClientModule }    from '@angular/common/http';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
      ],
      declarations: [
        DashboardComponent,
        HeroDetailComponent,
        HeroesComponent,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
