import 'package:flutter/widgets.dart';
import 'package:mindfit_app/components/Trainer/SideBar/index.dart';
import 'package:mindfit_app/pages/Trainer/Cliente/index.dart';
import 'package:mindfit_app/pages/Trainer/Home/index.dart';
import 'package:mindfit_app/pages/Trainer/Configuracao/index.dart';
import 'package:mindfit_app/pages/Trainer/Template/index.dart';
import 'package:mindfit_app/theme/constants.dart';

enum AppPage { home, client, template, configuration }

class InitApp extends StatefulWidget {
  const InitApp({super.key});

  @override
  State<InitApp> createState() => _StateInitApp();
}

class _StateInitApp extends State<InitApp> {
  AppPage pageSelect = AppPage.home;

  void onTap(AppPage page) {
    setState(() {
      pageSelect = page;
    });
  }

  final Map<AppPage, Widget> pages = {
    AppPage.home: HomePage(),
    AppPage.client: ClientePage(),
    AppPage.template: TemplatePage(),
    AppPage.configuration: ConfiguracaoPage(),
  };

  @override
  Widget build(BuildContext context) {
    return Container(
      color: Consts.white,
      child: Column(
        children: [
          Expanded(child: Container(child: pages[pageSelect])),
          SideBar(select: pageSelect, onTap: onTap),
        ],
      ),
    );
  }
}
