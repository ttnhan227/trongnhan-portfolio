// Original, quiet Web Audio composition. No media or AudioContext is loaded
// until the visitor explicitly enables sound in the HUD.
const MELODIES={village:[60,64,67,64,62,65,69,65,60,64,67,72,69,67,64,62],about:[60,67,64,67,62,69,65,69,60,67,64,72,65,64,62,67],groundwork:[64,67,72,67,65,69,74,69,64,67,72,76,74,72,69,67],'recon-qa':[60,67,72,67,62,69,74,69,64,71,76,71,62,67,74,67],tenvora:[60,64,67,69,65,69,72,69,62,65,69,67,60,64,67,64],logiflow:[60,67,64,72,62,69,65,74,64,71,67,76,62,69,65,67]};
const frequency=midi=>440*2**((midi-69)/12);
export class VillageAudio{
 constructor(){this.enabled=false;this.area='village';this.index=0;this.tick=null;this.context=null;this.lastBlip=0;}
 async enable(on){this.enabled=on;if(!on){clearInterval(this.tick);this.tick=null;await this.context?.suspend();return;}if(!this.context)this.context=new(window.AudioContext||window.webkitAudioContext)();await this.context.resume();if(!this.tick)this.tick=setInterval(()=>this.music(),350);}
 setArea(id){this.area=id;this.index=0;}
 tone(hz,duration=.06,volume=.02,type='triangle',delay=0){if(!this.enabled||!this.context)return;const c=this.context,start=c.currentTime+delay,o=c.createOscillator(),g=c.createGain();o.type=type;o.frequency.setValueAtTime(hz,start);g.gain.setValueAtTime(.0001,start);g.gain.exponentialRampToValueAtTime(volume,start+.008);g.gain.exponentialRampToValueAtTime(.0001,start+duration);o.connect(g);g.connect(c.destination);o.start(start);o.stop(start+duration+.01);}
 music(){if(!this.enabled||document.hidden)return;const notes=MELODIES[this.area]||MELODIES.village,midi=notes[this.index%notes.length];this.tone(frequency(midi),.28,.016,'triangle');if(this.index%4===0)this.tone(frequency(midi-24),.6,.012,'sine');this.index++;}
 play(id){if(!this.enabled)return;if(id==='step'){this.tone(90,.025,.009,'triangle');}else if(id==='blip'){const now=performance.now();if(now-this.lastBlip<70)return;this.lastBlip=now;this.tone(660,.022,.012,'square');}else if(id==='complete'){[60,64,67,72].forEach((n,i)=>this.tone(frequency(n),.2,.028,'triangle',i*.11));}else if(id==='door'){this.tone(180,.12,.02,'triangle');}else this.tone(440,.04,.018,'triangle');}
 destroy(){clearInterval(this.tick);this.context?.close();}
}
