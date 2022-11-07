<?php
namespace David\Custom\Block;

class Customer extends \Magento\Framework\View\Element\Template
{ 
    protected $_customerSession;    // don't name this `$_session` since it is already used in \Magento\Customer\Model\Session and your override would cause problems
    protected $_urlInterface;

    /**
     * @var Magento\Customer\Model\SessionFactory
     */
    protected $customerSessionFactory;

    public function __construct(
        \Magento\Framework\View\Element\Template\Context $context,
        \Magento\Customer\Model\Session $session,
        \Magento\Framework\UrlInterface $urlInterface,
        \Magento\Customer\Model\SessionFactory $customerSessionFactory
    ) {
        $this->_customerSession = $session;
        $this->_urlInterface = $urlInterface;
        $this->customerSessionFactory = $customerSessionFactory;
        parent::__construct($context);
    }

    public function getUrlInterfaceData()
    {
        return $this->_urlInterface->getUrl();
    }

    public function getLoginUrl(){
        return $this->_urlInterface->getUrl() . "customer/account/login";
    }
    public function getCreateAccountUrl(){
        return $this->_urlInterface->getUrl() . "customer/account/create";
    }
}