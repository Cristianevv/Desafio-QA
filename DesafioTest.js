import { Selector } from 'testcafe';

fixture `Desafio QA`
    .page `http://www.google.cl`;


// PROCESO COMPLETO + VALIDACION DE AZUCAR/>
test('Proceso + Validacion de Azucar en la Receta', async t => {
    const BuscaGoogle = Selector('input.gLFyf')
	const SeleccionaSucursales = Selector('h3.LC20lb.DKV0Md')
	const SeleccionaRecetas = Selector('#new_tottus_nav_cliente_recetas')
	const SeleccionaDificultad = Selector('#myDIV').find('button').withText('Alta')
	const SeleccionaCanela = Selector('h3').withText('Corona de rollitos de canela')
	const ValidaAzucar = Selector('p').withText('– 125g azúcar rubia')
    const BuscaTo = Selector('#search')
	
	await t
	
	.typeText(BuscaGoogle, 'Tottus Sucursales')
	.pressKey('enter')
	.click(SeleccionaSucursales)
	.click(SeleccionaRecetas)
	.click(SeleccionaDificultad)
	.click(SeleccionaCanela)
	.expect(ValidaAzucar.innerText).eql('– 125g azúcar rubia ', 'Error')
	
	
	
	
	
});


// PROCESO COMPLETO + VALIDACION DE CANELA/>
test('Proceso + Validacion de Canela en la Receta', async t => {
    const BuscaGoogle = Selector('input.gLFyf')
	const SeleccionaSucursales = Selector('h3.LC20lb.DKV0Md')
	const SeleccionaRecetas = Selector('#new_tottus_nav_cliente_recetas')
	const SeleccionaDificultad = Selector('#myDIV').find('button').withText('Alta')
	const SeleccionaCanela = Selector('h3').withText('Corona de rollitos de canela')
	const ValidaCanela = Selector('p').withText('– 15g canela en polvo ')
    const BuscaTo = Selector('#search')
	
	await t
	
	.typeText(BuscaGoogle, 'Tottus Sucursales')
	.pressKey('enter')
	.click(SeleccionaSucursales)
	.click(SeleccionaRecetas)
	.click(SeleccionaDificultad)
	.click(SeleccionaCanela)
	.expect(ValidaCanela.innerText).eql('– 15g canela en polvo ', 'Error')
	
	
	
	
	
});

