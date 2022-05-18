const soldier = {
  soldName: 'Stive',
  soldHealth: 10,
  soldGun: {
    gunName: 'ak-47',
    gunPatron: 3,
  },
  soldSupply: 3,

  soldFire: function () {
    if (this.soldGun.gunPatron <= 0) {
      console.log('Обойма пуста. Перезаредитесь!');
    } else {
      this.soldGun.gunPatron--;
      console.log('бах-бах');
    }

  },
  soldRecharge: function () {
    if (this.soldSupply <= 0) {
      console.log('не осталось припасов :(');
    } else {
      this.soldSupply--;
      this.soldGun.gunPatron = 30;
      console.log('Перезарядка...');
    }
  },
  soldWound: function () {
    if (this.soldHealth <= 0) {
      console.log('Ты проиграл!');
    } else {
      this.soldHealth--;
    }
  },

}

console.log(soldier);
soldier.soldFire();
soldier.soldFire();
soldier.soldFire();
soldier.soldFire();

soldier.soldRecharge();
soldier.soldWound();

console.log(soldier);