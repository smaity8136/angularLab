import { async, fakeAsync, ComponentFixture, TestBed, tick } from '@angular/core/testing';
import { By }                        from '@angular/platform-browser';
import { DebugElement }              from '@angular/core';

import { TwainService }   from './twain.service';
import { TwainComponent } from './twain.component';

describe('TwainComponent', () => {

  let comp: TwainComponent;
  let fixture: ComponentFixture<TwainComponent>;

  let spy: jasmine.Spy;
  let de: DebugElement;
  let el: HTMLElement;
  let twainService: TwainService; // the actually injected service

  const testQuote = 'Test Quote';

  beforeEach(() => {
    TestBed.configureTestingModule({
       declarations: [ TwainComponent ],
       providers:    [ TwainService ],
    });

    fixture = TestBed.createComponent(TwainComponent);
    comp    = fixture.componentInstance;

    // TwainService actually injected into the component
    twainService = fixture.debugElement.injector.get(TwainService);

    // Setup spy on the `getQuote` method
    
	

    // Get the Twain quote element by CSS selector (e.g., by class name)
    de = fixture.debugElement.query(By.css('.twain'));
    el = de.nativeElement;
  });
  
  // Test #1
  it('should not show quote before OnInit', () => {
    
	expect(false).toBe(true);
  });

  // Test #2
  it('should still not show quote after component initialized', () => {
    
	expect(false).toBe(true);
  });

  // Test #3
  it('should show quote after getQuote promise (async)', async(() => {
    
	expect(false).toBe(true);
  }));

  // Test #4
  it('should show quote after getQuote promise (fakeAsync)', 
  fakeAsync(() => {
    
	expect(false).toBe(true);
  }));

  // Test #5
  it('should show quote after getQuote promise (done)', done => {
    
	expect(false).toBe(true);
  });
  
});