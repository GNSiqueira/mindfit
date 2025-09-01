import 'package:flutter/material.dart';
import 'package:mindfit_app/components/Trainer/SideBar/item_sidebar.dart';
import 'package:mindfit_app/pages/index.dart';
import 'package:mindfit_app/theme/constants.dart';

class SideBar extends StatelessWidget {
  final AppPage select;
  final ValueChanged<AppPage> onTap;

  const SideBar({required this.select, required this.onTap});

  static const List<Map<String, dynamic>> itensBar = [
    {'icon': Icons.home_filled, 'label': 'Início', "id": AppPage.home},
    {'icon': Icons.people, 'label': 'Clientes', "id": AppPage.client},
    {'icon': Icons.article, 'label': 'Templates', "id": AppPage.template},
    {'icon': Icons.settings, 'label': 'Configs', "id": AppPage.configuration},
  ];

  @override
  Widget build(BuildContext context) {
    final alturaTela = MediaQuery.of(context).size.height;

    return Padding(
      padding: EdgeInsets.only(
        bottom: alturaTela * 0.02,
        left: 16,
        right: 16,
        top: 8,
      ),
      child: Container(
        decoration: BoxDecoration(
          color: Consts.colorGray_200,
          borderRadius: Consts.borderRadiusFull,
        ),
        height: alturaTela * 0.065,
        child: AnimatedPadding(
          duration: Duration(milliseconds: 100),
          padding: EdgeInsets.only(
            bottom: 8,
            left: select == AppPage.home ? 10 : 16,
            right: select == AppPage.configuration ? 10 : 16,
            top: 8,
          ),
          child: Row(
            mainAxisAlignment: MainAxisAlignment.spaceBetween,
            children: itensBar.map((item) {
              return ItemSideBar(
                icon: item["icon"],
                title: item["label"],
                select: select == item["id"] ? true : false,
                onTap: () => onTap(item["id"]),
              );
            }).toList(),
          ),
        ),
      ),
    );
  }
}
