import 'package:flutter/widgets.dart';

class ConfiguracaoPage extends StatelessWidget {
  const ConfiguracaoPage({super.key});
  
  @override
  Widget build(BuildContext context) {
    return Container(
      child: Center(
        child: Text(
          "Configuração",
          // Estilo definido diretamente aqui
          style: const TextStyle(
            fontSize: 28,
            fontWeight: FontWeight.bold,
            color: Color(0xFF333333),
          ),
        ),
      ),
    );
  }
}
