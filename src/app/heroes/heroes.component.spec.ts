import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule }    from '@angular/forms';
import { AppRoutingModule }     from '../app-routing.module';

import { DashboardComponent }   from '../dashboard/dashboard.component';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent }  from '../hero-detail/hero-detail.component';
import { APP_BASE_HREF } from '@angular/common';
import { HttpClientModule }    from '@angular/common/http';

describe('HeroesComponent', () => {
  let component: HeroesComponent;
  let fixture: ComponentFixture<HeroesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
          FormsModule,
          AppRoutingModule,
          HttpClientModule,
      ],
      declarations: [
        HeroesComponent,
        DashboardComponent,
        HeroDetailComponent,
      ],
      providers: [
        { provide: APP_BASE_HREF, useValue : '/' }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
