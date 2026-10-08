import {test,expect} from '@playwright/test';
const key='nhan-workshop-village-v1';
test('title loads without game assets and list exposes real links',async({page})=>{
 const requests=[];page.on('request',r=>requests.push(r.url()));await page.goto('/');
 await expect(page.getByRole('button',{name:'Continue',exact:true})).toBeDisabled();
 expect(requests.filter(u=>/town\/tiles|dungeon\/tiles/.test(u))).toEqual([]);
 await page.getByRole('link',{name:'Skip to portfolio'}).click();
 await expect(page.getByRole('heading',{name:'Projects',exact:true})).toBeVisible();
 await expect(page.getByRole('link',{name:'Download résumé'})).toHaveAttribute('href','/Tran_Trong_Nhan_CV.pdf');
 expect(await page.locator('article').count()).toBe(9);
});
test('movement saves progress and journal opens all selected captures',async({page})=>{
 const errors=[];page.on('pageerror',e=>errors.push(e.message));await page.goto('/');await page.getByRole('button',{name:'New game',exact:true}).click();
 const canvas=page.locator('.game-canvas');await expect(canvas).toBeVisible();await expect(page.locator('progress')).toHaveCount(0);
 await page.keyboard.down('w');await page.waitForTimeout(1000);await page.keyboard.up('w');await page.waitForTimeout(1200);
 const save=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)),key);expect(save.position.y).toBeLessThan(448);
 await page.getByRole('button',{name:'Journal',exact:true}).click();
 for(const title of ['Groundwork','Recon QA','Tenvora','LogiFlow']){
  await page.getByRole('button',{name:new RegExp('UNEXPLORED '+title)}).click();
  await expect(page.getByRole('dialog')).toBeVisible();await expect(page.getByRole('heading',{name:title,exact:true})).toBeVisible();
  await expect.poll(()=>page.locator('.project-capture').evaluate(i=>i.complete&&i.naturalWidth>0)).toBe(true);
  if(title==='Tenvora'){await page.getByRole('button',{name:'Mobile sales ledger'}).click();await expect(page.locator('.project-capture')).toHaveAttribute('src',/mobile.png/);}
  await page.keyboard.press('Escape');await page.getByRole('button',{name:'Journal',exact:true}).click();
 }
 expect(errors).toEqual([]);
});
test('continue restores a room and direct interaction opens project',async({page})=>{
 await page.addInitScript(({key})=>localStorage.setItem(key,JSON.stringify({version:1,scene:'groundwork',position:{x:120,y:83},visited:[]})),{key});
 await page.goto('/');await page.getByRole('button',{name:'Continue',exact:true}).click();await expect(page.locator('progress')).toHaveCount(0);await page.waitForTimeout(300);await page.keyboard.press('e');
 await expect(page.getByRole('heading',{name:'Groundwork',exact:true})).toBeVisible();await expect(page.locator('.project-capture')).toHaveCount(1);
 await page.keyboard.press('Escape');await expect(page.getByRole('dialog')).toHaveCount(0);
});
test('phone controls and fallback have no horizontal overflow',async({page})=>{
 await page.setViewportSize({width:390,height:844});await page.emulateMedia({reducedMotion:'reduce'});await page.goto('/');await page.getByRole('button',{name:'New game',exact:true}).click();await expect(page.getByRole('button',{name:'Move up'})).toBeVisible();await expect(page.locator('progress')).toHaveCount(0);
 expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
 await page.getByRole('link',{name:'Portfolio list',exact:true}).click();expect(await page.evaluate(()=>document.documentElement.scrollWidth)).toBeLessThanOrEqual(390);
});
test('fourth physical project interaction awards discovery achievement',async({page})=>{
 await page.addInitScript(({key})=>localStorage.setItem(key,JSON.stringify({version:1,scene:'logiflow',position:{x:120,y:83},visited:['groundwork','recon-qa','tenvora']})),{key});
 await page.goto('/');await page.getByRole('button',{name:'Continue',exact:true}).click();await expect(page.locator('progress')).toHaveCount(0);await page.waitForTimeout(300);await page.keyboard.press('e');await expect(page.getByText('Whole village explored')).toBeVisible();
});
test('solid furniture blocks movement and dialogs pause it',async({page})=>{
 await page.addInitScript(({key})=>localStorage.setItem(key,JSON.stringify({version:1,scene:'groundwork',position:{x:120,y:83},visited:[]})),{key});
 await page.goto('/');await page.getByRole('button',{name:'Continue',exact:true}).click();await expect(page.locator('progress')).toHaveCount(0);await page.keyboard.down('w');await page.waitForTimeout(2000);await page.keyboard.up('w');
 const y=await page.evaluate(k=>JSON.parse(localStorage.getItem(k)).position.y,key);expect(y).toBeGreaterThanOrEqual(71);
 await page.keyboard.press('e');await expect(page.getByRole('dialog')).toBeVisible();await page.keyboard.down('s');await page.waitForTimeout(1100);await page.keyboard.up('s');expect(await page.evaluate(k=>JSON.parse(localStorage.getItem(k)).position.y,key)).toBe(y);
});
