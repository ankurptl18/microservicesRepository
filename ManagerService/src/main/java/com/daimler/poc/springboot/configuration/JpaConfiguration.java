package com.daimler.poc.springboot.configuration;

import java.util.Properties;

import javax.naming.NamingException;
import javax.persistence.EntityManagerFactory;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.env.Environment;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.orm.jpa.JpaTransactionManager;
import org.springframework.orm.jpa.JpaVendorAdapter;
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean;
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.annotation.EnableTransactionManagement;

@Configuration
@EnableJpaRepositories(basePackages = "com.daimler.poc.springboot.repositories",
		entityManagerFactoryRef = "entityManagerFactory",
		transactionManagerRef = "transactionManager")
@EnableTransactionManagement
public class JpaConfiguration {

	@Autowired
	private Environment environment;

	@Value("${datasource.sampleapp.maxPoolSize:10}")
	private int maxPoolSize;

	/*
	 * Populate SpringBoot DataSourceProperties object directly from application.yml 
	 * based on prefix.Thanks to .yml, Hierachical data is mapped out of the box with matching-name
	 * properties of DataSourceProperties object].
	 */
	/*@Bean
	@Primary
	@ConfigurationProperties(prefix = "datasource.sampleapp")
	public DataSourceProperties dataSourceProperties(){
		return new DataSourceProperties();
	}
*/
	/*
	 * Configure HikariCP pooled DataSource.
	 */
	/*@Bean
	public DataSource dataSource() {
		DataSourceProperties dataSourceProperties = dataSourceProperties();
			HikariDataSource dataSource = (HikariDataSource) DataSourceBuilder
					.create(dataSourceProperties.getClassLoader())
					.driverClassName(dataSourceProperties.getDriverClassName())
					.url(dataSourceProperties.getUrl())
					.username(dataSourceProperties.getUsername())
					.password(dataSourceProperties.getPassword())
					.type(HikariDataSource.class)
					.build();
			dataSource.setMaximumPoolSize(maxPoolSize);
			return dataSource;
	}*/

	private Properties jpaProperties() {

		Properties properties = new Properties();
		
		properties.put(org.hibernate.cfg.Environment.URL, "jdbc:mysql://teameaappdb.mysql.database.azure.com:3306/poc?autoReconnect=true"); 
		properties.put(org.hibernate.cfg.Environment.DRIVER, "com.mysql.jdbc.Driver");
		properties.put("hibernate.dialect", "org.hibernate.dialect.MySQLDialect");
		properties.put("hibernate.show_sql", "true");
		properties.put("hibernate.format_sql", "true");
		properties.put(org.hibernate.cfg.Environment.USER, "teamea@teameaappdb");
		properties.put(org.hibernate.cfg.Environment.PASS, "ID@5166992051651758");
		
		properties.put("c3p0.min_size", 5);
		properties.put("c3p0.max_size", 20);
		properties.put("c3p0.timeout", 1800);
		properties.put("c3p0.max_statements", 50);
		
		return properties;
	}
	
	/*
	 * Entity Manager Factory setup.
	 */
	@Bean
	public LocalContainerEntityManagerFactoryBean entityManagerFactory() throws NamingException {
		LocalContainerEntityManagerFactoryBean factoryBean = new LocalContainerEntityManagerFactoryBean();
		/*factoryBean.setDataSource(dataSource());*/
		factoryBean.setPackagesToScan(new String[] { "com.daimler.poc.springboot.model" });
		factoryBean.setJpaVendorAdapter(jpaVendorAdapter());
		factoryBean.setJpaProperties(jpaProperties());
		return factoryBean;
	}

	/*
	 * Provider specific adapter.
	 */
	@Bean
	public JpaVendorAdapter jpaVendorAdapter() {
		HibernateJpaVendorAdapter hibernateJpaVendorAdapter = new HibernateJpaVendorAdapter();
		return hibernateJpaVendorAdapter;
	}

	@Bean
	@Autowired
	public PlatformTransactionManager transactionManager(EntityManagerFactory emf) {
		JpaTransactionManager txManager = new JpaTransactionManager();
		txManager.setEntityManagerFactory(emf);
		return txManager;
	}

}
